import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Provider from "./components/Provider";
import Tarifador from "./components/Tarifador";
import Parametros from "./components/Parametros";
//import Map from "./components/MapContainer"
import Map from "./components/MapaRuta"
//import Map from "./components/MapaPrueba"
import ModalInfo from "./components/ModalInfo";

function App() {
  return (
    
     <div className="container">
    <div className="App">   
      <Provider>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQLBwlf4h9gDvu_eU0v1vO0gj8PtC7lSI&libraries=places"></script>
        <div className="row"> 
        <div className="col-md-6">
          <div className="row">       
            <div className="card card-body">
              <Parametros />
            </div>
          </div>
          <div className="row"> 
            <div className="card card-body">
              <Tarifador />
            </div>
          </div>

        </div>
        <div className="col-md-6">
          <div className="card card-body">
            
              <Map />
            
          </div>
        </div>
        </div>     
      </Provider>
    </div>
    </div>
  );
}

export default App;
