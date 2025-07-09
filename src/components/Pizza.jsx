import React from "react";

const Pizza = ({ pizzaObj }) => {
  return (
    <>
      <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <div>
          <h3>{pizzaObj.name}</h3>
          <p>{pizzaObj.ingredients}</p>
          <span>
            {pizzaObj.soldOut ? "Sold Out" : parseInt(pizzaObj.price) + 20}
          </span>
        </div>
      </li>
    </>
  );
};

export default Pizza;
