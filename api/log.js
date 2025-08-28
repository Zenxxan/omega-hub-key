let logs = [];
const MAX_LOGS = 50; // maximum number of logs to keep

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    logs.unshift(data); 

    
    if (logs.length > MAX_LOGS) {
      logs = logs.slice(0, MAX_LOGS);
    }

    return res.status(200).json({ ok: true });
  }

  if (req.method === "GET") {
    return res.status(200).json(logs);
  }

  res.status(405).json({ error: "Method not allowed" });
}
