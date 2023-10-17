import styled from "styled-components";

const Container = styled.div`
  width: 358px;
  padding: 5px 15px;
  color: black;
  border: 17px solid #e9cc48;
  border-radius: 14px;
`;


const StyledComponent = ({name, description, lifePoints ,attackOne, strengthOne, attackTwo, strengthTwo, pokeImg }) => (
    <Container className="pokemon-card">
      <h1 className="salameche base-pokemon">
      {name}
        <i className="nrj nrj-feu"></i>
        <span>{lifePoints}</span>
      </h1>
      <figure>
        <img
          className="pokemon-image"
          src={pokeImg}
          alt="Salamèche"
        />
        <figcaption>{description}</figcaption>
      </figure>
      <div className="attack-block">
        <div className="attack attack-1 attack-only">
          <div className="nrj-block">
            <i className="nrj nrj-normal"></i>
          </div>
          <h2>{attackOne}</h2>
          <span>{strengthOne}</span>
        </div>
        <div className="attack attack-2">
          <div className="nrj-block">
            <i className="nrj nrj-feu"></i>
            <i className="nrj nrj-normal"></i>
          </div>
          <h2>
            {attackTwo}{" "}
            <p>
              Défaussez 1 carte énergie <i className="nrj nrj-feu"></i> attachée
              à Salamèche pour pouvoir utiliser cette attaque.
            </p>
          </h2>
          <span>{strengthTwo}</span>
        </div>
      </div>
      <div className="stats-block">
        <h3>
          Faiblesse<i className="nrj nrj-eau"></i>
        </h3>
        <h3>Résistance</h3>
        <h3>
          Coût de retraite<i className="nrj nrj-normal"></i>
        </h3>
      </div>
      <p className="infos-block">
        Il préfère les endroits chauds. En cas de pluie, de la vapeur se forme
        autour de sa queue. NIV.10 No.4
      </p>
    </Container>
  );


export default StyledComponent;
