from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

# Sample internship data
SAMPLE_INTERNSHIPS = [
    {
        "id": 1,
        "title": "Software Development Intern",
        "org": "Tech Corp",
        "location": "Remote",
        "mode": "Remote",
        "score": 95,
        "why": "Your Python skills and previous project experience make you a great fit for this role."
    },
    {
        "id": 2,
        "title": "Data Science Intern",
        "org": "Analytics Inc",
        "location": "Delhi",
        "mode": "Hybrid",
        "score": 88,
        "why": "Your analytical skills and interest in data visualization align perfectly with our needs."
    },
    {
        "id": 3,
        "title": "Marketing Intern",
        "org": "Growth Co",
        "location": "Mumbai",
        "mode": "On-site",
        "score": 82,
        "why": "Your communication skills and creativity are exactly what we're looking for."
    }
]

@app.route('/recommend', methods=['POST'])
def recommend():
    try:
        data = request.get_json()
        candidate = data.get('candidate', {})
        
        # Simple matching logic based on candidate profile
        matches = []
        for internship in SAMPLE_INTERNSHIPS:
            # Basic scoring logic - in real app, this would be more sophisticated
            score = 70  # Base score
            
            # Adjust score based on location preference
            if candidate.get('city') == 'Delhi' and 'Delhi' in internship['location']:
                score += 20
            elif candidate.get('city') == 'Remote' and internship['mode'] == 'Remote':
                score += 15
            
            # Adjust score based on skills/domain
            if candidate.get('domain') and candidate['domain'].lower() in internship['title'].lower():
                score += 25
            
            # Only include matches with score > 80
            if score > 80:
                internship['score'] = min(score, 99)
                matches.append(internship)
        
        # Sort by score (highest first)
        matches.sort(key=lambda x: x['score'], reverse=True)
        
        return jsonify({
            'matches': matches[:5],  # Return top 5 matches
            'total': len(matches)
        })
        
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
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
