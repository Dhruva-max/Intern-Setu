import axios from 'axios';

const RECOMMEND_URL = process.env.NEXT_PUBLIC_RECOMMEND_URL;

export async function getMatches(candidate) {
  const res = await axios.post(`${RECOMMEND_URL}/recommend`, { candidate });
  return res.data.matches;
}
