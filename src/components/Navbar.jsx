import React, { useState, useContext } from "react";
import styled from "styled-components";
import BurgerButtons from "./BurgerButtons";
import CartWidget from "./CartWidget";
import {NavLink} from "react-router-dom";
import { context } from "../context/CartContext";


function Navbar() {
  const [clicked, setClicked] = useState(false);
  // console.log(clicked);

  const handleClick = () => {
    //cuando esta true lo pasa a false y viceversa
    setClicked(!clicked);
  };

  const { cartQuantity } = useContext(context)

  const categories = [
    { name: "Nueces", route: "category/Frutos Secos", id: 1 },
    { name: "Cebada", route: "category/Cereales", id: 2 },
    { name: "Garbanzos", route: "category/Legumbres", id: 3 },
  ];

  return (
    <>
      <NavContainer>

        <NavLink to="/">
          <h2>
            Dietetica <span>Responsive</span>
          </h2>
        </NavLink>

        <div className={`links ${clicked ? "active" : ""}`}>
          {/* <NavLink onClick={handleClick} to="">
            Inicio
          </NavLink>
          <NavLink onClick={handleClick} to="">
            Productos
          </NavLink>
          <NavLink onClick={handleClick} to="">
            Quiénes Somos
          </NavLink>
          <NavLink onClick={handleClick} to="">
            Contacto
          </NavLink>
          <NavLink onClick={handleClick} to="">
            Noticias
          </NavLink> */}

          <nav>
          <NavLink to="/">
            Inicio
          </NavLink>
          {categories.map((element) => (
            <NavLink  key={element.id} to={`/${element.route}`}>
              {element.name}
            </NavLink>
          ))}
        </nav>
        </div>
        
        <NavLink to="/Cart">
          <CartWidget />
          { cartQuantity !== 0 ? (<div className="badge">{cartQuantity}</div>) : null }
        </NavLink>

        <div className="burguer">
          <BurgerButtons clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>
      </NavContainer>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }
  padding: 0.4rem;
  background-color: #fe7bb0;
  background-image: linear-gradient(315deg, #fe7bb0 0%, #ff748b 74%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    a {
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin-left: 20%;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }

  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
const BgDiv = styled.div`
  position: absolute;
  background-color: #fe7bb0;
  background-image: linear-gradient(315deg, #fe7bb0 0%, #ff748b 74%);
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .badge:after{
        content:attr(value);
        font-size:12px;
        color: #fff;
        background: red;
        border-radius:50%;
        padding: 0 5px;
        position:relative;
        left:-8px;
        top:-10px;
        opacity:0.9;
    }
`;
