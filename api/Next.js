import { useEffect, useState } from "react";

export default function Home() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const res = await fetch("/api/log");
      const data = await res.json();
      setLogs(data);
    };

    fetchLogs();
    const interval = setInterval(fetchLogs, 5000); // refresh every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">🧾 Syllinse Logs</h1>

      <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
        <thead className="bg-gray-800">
          <tr>
            <th className="p-2 text-left">🐾 Pet</th>
            <th className="p-2">👥 Players</th>
            <th className="p-2">📜 Gen</th>
            <th className="p-2">✨ Traits</th>
            <th className="p-2">🧬 Mutation</th>
            <th className="p-2">🆔 Job ID</th>
            <th className="p-2">🔗 Join</th>
            <th className="p-2">⏰ Time</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, i) => (
            <tr key={i} className="border-b border-gray-700 hover:bg-gray-800">
              <td className="p-2">{log.petName}</td>
              <td className="p-2">{log.playerCount}/8</td>
              <td className="p-2">{log.finalGen}</td>
              <td className="p-2">{log.traits}</td>
              <td className="p-2">{log.mutation}</td>
              <td className="p-2 text-xs">{log.jobId}</td>
              <td className="p-2">
                <a
                  href={log.joinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  Join
                </a>
              </td>
              <td className="p-2">{log.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
