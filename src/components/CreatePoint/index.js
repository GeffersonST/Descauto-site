import React from "react";
import logo from "../assets/logomapa.png";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";

const CreatePoint = () => {
  return (
    <div id="page-create-point">
      <form
        method="get"
        action="https://www.google.com/maps/dir//DESCAUTO+ESCAPAMENTOS+E+LUBRIFICANTES+-+Rua+15+de+Novembro+-+Centro,+Uruguaiana+-+RS/@-29.7643225,-57.0879654,17.25z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94535b386525d125:0x8d645e9fcb56ec22!2m2!1d-57.0877662!2d-29.7662566?"
        target="_blank"
      >
        <fieldset>
          <legend>
            <h2> R. Sete de Setembro, 3165 - São Miguel, Uruguaiana - RS</h2>
          </legend>
          <MapContainer
            center={[-29.7662566, -57.0877662]}
            zoom={15}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-29.7662566, -57.0877662]}>
              <Popup>
                <img src={logo} alt="Logo" />
              </Popup>
            </Marker>
          </MapContainer>
          <div className="field-group">
            <div className="field"></div>
            <div className="field"></div>
          </div>
        </fieldset>

        <button type="submit">Ver Rota</button>
      </form>
    </div>
  );
};

export default CreatePoint;
