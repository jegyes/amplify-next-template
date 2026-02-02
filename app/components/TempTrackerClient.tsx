'use client';

import { useEffect, useState } from "react";

type Props = { lat: number; lon: number };

export default function TempTrackerClient({ lat, lon }: Props) {
  const [temp2m, setTemp2m] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      setLoading(true);
      setError(null);

      const url = `/api/weather?lat=${lat}&lon=${lon}`;
      console.log("Client weather URL:", url);

      try {
        const res = await fetch(url, { cache: "no-store" });
        const data = await res.json();

        if (!res.ok) throw new Error(data?.error ?? "Weather request failed");

        if (!cancelled) {
          setTemp2m(typeof data?.temp2m === "number" ? data.temp2m : null);
          setLoading(false);
        }
      } catch (e: any) {
        if (!cancelled) {
          setError(e?.message ?? "Unknown error");
          setLoading(false);
        }
      }
    }

    run();
    return () => { cancelled = true; };
  }, [lat, lon]);

  if (loading) return <p>Client weather: loading…</p>;
  if (error) return <p>Client weather error: {error}</p>;

  return <p>Lat: {lat}; Lon: {lon}.  The current temperature is {temp2m ?? "N/A"} °C.</p>;
}
