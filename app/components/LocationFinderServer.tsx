export default async function LocationFinderServer() {

        const response = await fetch('https://apip.cc/json');
        const locationData = await response.json();
        console.log(locationData);
        const locationInfo =locationData;


    return (
        <>
          <h1>Hello from {locationInfo?.City} - This is my server component</h1>
            {/* <h2>Lat: {locationInfo?.Latitude}; Lon: {locationInfo?.Longitude}</h2> */}
        </>

    )
}
