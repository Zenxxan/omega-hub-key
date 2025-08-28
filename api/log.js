let logs = [];
const MAX_LOG_AGE = 60 * 1000; 

export default async function handler(req, res) {
  const now = Date.now();

  if (req.method === "POST") {
    const data = req.body;

   
    data.timestamp = now;
    logs.unshift(data);

    
    logs = logs.filter(log => now - log.timestamp <= MAX_LOG_AGE);

    return res.status(200).json({ ok: true });
  }

  if (req.method === "GET") {
    // Filter out old logs before sending
    const recentLogs = logs.filter(log => now - log.timestamp <= MAX_LOG_AGE);
    return res.status(200).json(recentLogs);
  }

  res.status(405).json({ error: "Method not allowed" });
}
