import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  return (
    <>
      <section className="detail-container">
        <div className="detailContainer-img">
          <img
            className="detail-img"
            src={props.character.image}
            alt="imagen del personaje"
          />
        </div>
        <div className="detailContainer-text">
          <h2 className="detail-name">{props.character.name}</h2>
          <h3>Especie: {props.character.species}</h3>
          <h3>Planeta: {props.character.planet}</h3>
          <h3>Estado: {props.character.status}</h3>
          <h3>NºEspisodios: {props.character.episodes}</h3>
        </div>
        <div>
          <Link to="/">
            <button className="detail-buton">Volver</button>
          </Link>
        </div>
      </section>
    </>
  );
};
export default CharacterDetail;
