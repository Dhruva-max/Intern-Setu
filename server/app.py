from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

DATA_PATH = os.path.join(os.path.dirname(__file__), 'internships.json')
with open(DATA_PATH) as f:
    INTERNSHIPS = json.load(f)

# helper scoring
def score_candidate(candidate, job):
    # candidate: {location, skills:[], education, sector}
    score = 0.0

    # location (30%) — exact or nearby match
    loc_score = 0.0
    if candidate.get('city') and candidate['city'].lower() in job.get('location','').lower():
        loc_score = 1.0
    elif job.get('mode') and 'remote' in job['mode'].lower():
        loc_score = 0.8
    score += loc_score * 30

    # skills (25%) — overlap normalized
    cand_skills = set([s.lower() for s in candidate.get('skills',[])])
    job_skills = set([s.lower() for s in job.get('skills',[])])
    if job_skills:
        overlap = len(cand_skills & job_skills) / len(job_skills)
    else:
        overlap = 0
    score += overlap * 25

    # education (20%) — simple mapping
    edu_map = {'phd':1.0,'postgrad':0.9,'undergrad':0.8,'diploma':0.6,'other':0.5}
    cand_edu = candidate.get('education','').lower()
    edu_score = edu_map.get(cand_edu, 0.5)
    score += edu_score * 20

    # sector interest (25%) — binary or partial match
    cand_sector = candidate.get('sector','').lower()
    job_sector = job.get('sector','').lower()
    sector_score = 1.0 if cand_sector and cand_sector in job_sector else 0.0
    score += sector_score * 25

    return round(score, 2)

@app.route('/recommend', methods=['POST'])
def recommend():
    try:
        data = request.get_json()
        candidate = data.get('candidate', {})

        scored = []
        for job in INTERNSHIPS:
            s = score_candidate(candidate, job)
            explanation = []
            explanation.append(f"Location match: { 'Yes' if candidate.get('city','').lower() in job.get('location','').lower() else 'Partial/Remote' }")
            ks = set([x.lower() for x in candidate.get('skills',[])]) & set([x.lower() for x in job.get('skills',[])])
            explanation.append(f"Skills matched: {', '.join(ks) if ks else 'None'}")
            explanation.append(f"Education: {candidate.get('education','N/A')}")
            explanation.append(f"Sector match: {job.get('sector','')}")
            scored.append({ 'job': job, 'score': s, 'explanation': explanation })

        scored = sorted(scored, key=lambda x: x['score'], reverse=True)[:5]
        return jsonify({'matches': scored})
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/analytics', methods=['POST'])
def analytics():
    try:
        event_data = request.get_json()
        print('Analytics event:', event_data)
        
        # In a real app, you would save this to a database
        # For now, just log it
        with open('analytics.log', 'a') as f:
            f.write(json.dumps(event_data) + '\n')
        
        return jsonify({'ok': True})
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy', 'message': 'Intern-Setu API is running'})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5001))
    app.run(debug=True, host='0.0.0.0', port=port)
