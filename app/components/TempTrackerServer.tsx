type TempTrackerServerProps = {
  lat: number;
  lon: number;
};

export default async function TempTrackerServer({ lat, lon }: TempTrackerServerProps) {
  return (
    <div>
      <p>Server tracker got coords ✅</p>
      <p>Lat: {lat}</p>
      <p>Lon: {lon}</p>
    </div>
  );
}
