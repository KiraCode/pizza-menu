import React from "react";
import Pizza from "./Pizza";

const Menu = ({ pizzaData }) => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaData.length > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza key={pizza.name} pizzaObj={pizza} />
          ))}
        </ul>
      ) : (
        <p>We are working on our menu</p>
      )}
    </main>
  );
};

export default Menu;
