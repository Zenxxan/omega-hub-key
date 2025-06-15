
export default function handler(req, res) {
  const key = "OMEGA-" + Math.random().toString(36).substr(2, 6).toUpperCase();
  global.latestKey = key;
  res.status(200).json({ key });
}
