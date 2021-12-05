import React, { useContext, useState } from "react";
import { AppContext } from "./Provider";
import PlacesAutocomplete from "react-places-autocomplete";

const Ruta = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [state, setState] = useContext(AppContext);

  const handleSelectOrigin = async (value) => {
    setOrigin(value);
    setState({ ...state, origin: value });

    console.log(origin);
  };

  const handleChangeOrigin = async (origin) => {
    setOrigin(origin);

    setState({ ...state, origin: origin });
  };

  const handleSelectDestination = async (value) => {
    setDestination(value);
    setState({ ...state, destination: value });

    console.log(value);
  };

  const handleChangeDestination = async (destination) => {
    setDestination(destination);

    setState({ ...state, destination: destination });
  };

  return (
    <div className="row">
      <div className="col-md-9">
        <div className="card card-body">
          <h3>Tarifa online</h3>
          <div className="form-group mb-3">
            <PlacesAutocomplete
              value={origin}
              onChange={handleChangeOrigin}
              onSelect={handleSelectOrigin}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div>
                  <input
                    {...getInputProps({ placeholder: "Ingrese origen..." })}
                  />
                  <div>
                    {loading && <div>loading...</div>}
                    {suggestions.map((suggestion) => {
                      const style = suggestion.active
                        ? { background: "#D0DFE6", cursor: "pointer" }
                        : { background: "#ffffff", cursor: "pointer" };

                      return (
                        <div {...getSuggestionItemProps(suggestion, { style })}>
                          {suggestion.description}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
          </div>
          <div className="form-group mb-3">
            <PlacesAutocomplete
              value={destination}
              onChange={handleChangeDestination}
              onSelect={handleSelectDestination}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div>
                  <input
                    {...getInputProps({ placeholder: "Ingrese destino..." })}
                  />
                  <div>
                    {loading ? <div>loading...</div> : null}
                    {suggestions.map((suggestion) => {
                      const style = suggestion.active
                        ? { background: "#D0DFE6", cursor: "pointer" }
                        : { background: "#ffffff", cursor: "pointer" };

                      return (
                        <div {...getSuggestionItemProps(suggestion, { style })}>
                          {suggestion.description}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
          </div>
        </div>
        <div>
          <p>{origin}</p>
          <p>{destination}</p>
        </div>
      </div>
    </div>
  );
};

export default Ruta;

// https://github.com/ReySalazar/cotizador-online.git
