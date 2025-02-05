"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [ip, setIp] = useState("Fetching...");

  useEffect(() => {
    fetch("/api/public-ip")
      .then((res) => res.json())
      .then((data) => setIp(data.ip))
      .catch(() => setIp("Error fetching IP"));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Your Public IP Address</h1>
      <p className="text-lg mt-4 px-4 py-2 rounded">{ip}</p>
    </main>
  );
}
