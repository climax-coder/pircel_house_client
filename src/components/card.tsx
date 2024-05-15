import React from "react";
import "./card.css";

interface Trait {
  name: string;
}

interface CardProps {
  house: { name: string; founder: string; animal: string; traits: Trait[] };
}

const Card: React.FC<CardProps> = ({ house }) => {
  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems:'center' }}>
        <div className="title">{house.name}</div>
        <div>{house.animal}</div>
      </div>
      <div className="back-gradient"></div>
      <div style={{ fontSize: "1.2rem" }}>
        Founder: <span style={{ fontWeight: "bold" }}>{house.founder}</span>
      </div>
      <input className="trait_input"></input>
      <div style={{display:'flex', width:'100%', flexWrap:'wrap'}}>
        {house.traits.map((trait, idx) => (
          <div key={idx} className="trait_item">{trait.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Card;
