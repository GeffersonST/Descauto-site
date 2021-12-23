import { BsTelephoneInboundFill } from "react-icons/bs";
import { GiSteeringWheel } from "react-icons/gi";
const Hero = () => {
  return (
    <div className="HeroContainer">
      <div className="HeroContent">
        <div className="HeroItems">
          <div className="HeroH1">Escapamentos Lubrificantes</div>
          <div className="HeroP">
            {" "}
            Acessórios em Geral <br />
            <GiSteeringWheel />
          </div>

          <div className="HeroBtn">
            {" "}
            <BsTelephoneInboundFill />{" "}
            <a href="tel:055-3411 1158">Faça seu Orçamento</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
