import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import GlobalVar from "../GlobalVar";
import { AppContext } from "./Provider";

const MyCotizador = () => {

  const [state, setState] = useContext(AppContext);
  const [distance, setDistance] = useState("");
  const [finalCost, setFinalCost] = useState(0);
  const [clima, setClima] = useState("");

  useEffect(() => {
    getClima();
  }, [clima.valueOf]);

  async function getClima() {
    const res = await axios.get("http://localhost:4000/api/distancia");
    console.log(res.data.clima);
    let clima = res.data.clima;
    setClima(clima);
  }

  async function distanceResponse() {

    setState({ ...state, destinationMap: state.destination });

    const res = await axios.post("http://localhost:4000/api/distancia", {
      origin: state.origin,
      destination: state.destination,
    });

    let distancia = res.data.distance.distance;
    let distancia_mt = res.data.distance.distanceValue;
    let precio_mt = GlobalVar.Costo_metro;
    setDistance(distancia);

    console.log("Distancia en mt: ", distancia_mt);
    console.log("Distancia en KM: ", distancia);

    if (distancia_mt > GlobalVar.limit) {
      precio_mt += GlobalVar.ExcesoLimit;
    }

    let total = distancia_mt * precio_mt + GlobalVar.Tarifa_Base;
    if (clima === GlobalVar.Clima) {
      // Rain - Clouds - Clear - Drizzle(llovizna)
      total = total * GlobalVar.RecargoClima;
    }
    if(distancia_mt > GlobalVar.MaxDistance){
      alert('Lo sentimos, ha excedido la distancia máxima de recorrido')
    }

    total = Math.round(total);
    setFinalCost(total);
  }

  return (
    <div className="row">
      <div className="col-md-9">
        <div className="card card-body">
          <div>
            <button
              className="btn btn-primary mb-3"
              onClick={() => distanceResponse()}
            >
              Cotizar
            </button>
            <div>
              <div className="mb-3">
                <h5>Distancia: {distance}</h5>
              </div>
              <div>
                <h5>
                  <span>Total: $ {finalCost}</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <p>{state.origin}</p>
        <p>{state.destination}</p>
      </div>
    </div>
  );
};

export default MyCotizador;
