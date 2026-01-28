// "use client";
import "./../app/app.css";
import ToDo from "./components/ToDo";
import LocationFinderClient from "./components/LocationFinderClient";
import LocationFinderServer from "./components/LocationFinderServer";
// import TempTrackerClient from "./components/TempTrackerClient";
// import TempTrackerServer from "./components/TempTrackerServer";


export default function App() {
    
  return (
    <main>
      <LocationFinderClient />
      {/* <TempTrackerClient /> */}
      <LocationFinderServer />
      {/* <TempTrackerServer /> */}
      <ToDo />
    </main>
  );
}
