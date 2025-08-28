// /api/log.js
let logs = [];

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    logs.unshift(data); // add new log at top
    return res.status(200).json({ ok: true });
  }
  if (req.method === "GET") {
    return res.status(200).json(logs);
  }
  res.status(405).json({ error: "Method not allowed" });
}
