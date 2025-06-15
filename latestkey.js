
export default function handler(req, res) {
  const key = global.latestKey || "NO-KEY-GENERATED";
  res.status(200).json({ key });
}
