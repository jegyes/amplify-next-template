'use client';

type TempTrackerProps = { lat: number; lon: number };

export default function TempTrackerClient({ lat, lon }: TempTrackerProps) {
  return (
    <div>
      <p>Lat: {lat}; Lon: {lon}</p>
      <p>The temperature here is </p>
    </div>
  );
}
