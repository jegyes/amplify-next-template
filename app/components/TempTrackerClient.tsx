'use client';

type TempTrackerProps = { lat: number; lon: number };

export default function TempTrackerClient({ lat, lon }: TempTrackerProps) {
  return (
    <div>
      <p>Lat: {lat}</p>
      <p>Lon: {lon}</p>
    </div>
  );
}
