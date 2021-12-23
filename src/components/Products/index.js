import React from "react";
import img1 from "../assets/background2.jpg";
import img2 from "../assets/paint1.jpg";
import img3 from "../assets/paint2.jpg";

const Products = () => {
  return (
    <div className="ProductsContainer">
      <div className="ProductsHeading">PRODUTOS</div>
      <div className="ProductWrapper">
        <div className="ProductCard">
          <img className="ProductImg" src={img1} alt="img1" />

          <div className="ProductTitle">ESCAPAMENTOS</div>

          <select className="ProductButton">
            <option> Todas as Marcas</option>
            <option>Marcas</option>
            <option>Marcas</option>
          </select>
        </div>
        <div className="ProductCard">
          <img className="ProductImg" src={img2} alt="img1" />

          <div className="ProductTitle">LUBRIFICANTES</div>

          <select className="ProductButton">
            <option> Todas as Marcas</option>
            <option>Marcas</option>
            <option>Marcas</option>
          </select>
        </div>
        <div className="ProductCard">
          <img className="ProductImg" src={img3} alt="img1" />

          <div className="ProductTitle">ACESSÓRIOS EM GERAL</div>

          <select className="ProductButton">
            <option> Todas as Marcas</option>
            <option>Marcas</option>
            <option>Marcas</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Products;
