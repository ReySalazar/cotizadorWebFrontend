import React, { useContext, useState, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { AppContext } from "./Provider";

const DirectionRequest = () => {
  
  const ApiKey = process.env.REACT_APP_API_KEY;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: ApiKey,
  });
  const containerStyle = {
    width: "600px",
    height: "520px",
  };
  const center = {
    lat: -34.60407467326673,
    lng: -58.39252761864126,
  };
  const [state] = useContext(AppContext);
  const [direction, setDirection] = useState({});

  useEffect(() => {
    const DirectionsService = new window.google.maps.DirectionsService();
    DirectionsService.route(
      {
        origin: state.origin,
        destination: state.destinationMap,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirection({
            directions: result,
          });
          //resolve(result)
        } else {
          console.error(`error fetching directions ${result}`);
          //reject(status)
        }
      }
    );
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
      {<DirectionsRenderer directions={direction.directions} />}
      {/* Child components, such as markers, info windows, etc. */}
      <> </>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default DirectionRequest;
