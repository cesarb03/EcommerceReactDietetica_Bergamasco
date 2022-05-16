import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterStyle>
      <footer className="footer">
        <div className="menu-nav">
          <div className="titulo-logo">
            <h5 className="titulo-nav">Diseño en React</h5>
          </div>
          <div>
            <ul className="lista">
              <li className="item-lista">Todos los derechos Reservados</li>
            </ul>
          </div>
          <div className="copy">
            Desarrollado por César Bergamasco |{" "}
            <a href="https://github.com/cesarb03" target="blank">
              <FaGithub size={18} /> Github
            </a>
          </div>
        </div>
      </footer>
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.div`
  .footer{
    padding-top: 10%;
  }
  .menu-nav {
    display: flex;
    justify-content: space-around;
    background-image: linear-gradient(315deg, #fe7bb0 0%, #ff748b 74%);
    align-items: center;
    margin-top: auto;
    width: 100vw;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .titulo-logo {
    display: flex;
    align-items: center;
  }
  .titulo-nav {
    color: white;
    font-size: 20px;
    font-weight: 200;
  }
  .lista {
    display: flex;
    list-style: none;
  }
  .item-lista {
    color: white;
    margin: auto 1rem;
    align-items: center;
    font-weight: 200;
  }
  .copy {
    color: white;
    font-weight: 200;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  a:hover {
    color: black;
  }
  @media only screen and (max-width: 600px) {
    .footer{
    padding-top: 25%;
  }
  .menu-nav {
  height: 100px;
  }

  .titulo-nav {
    margin-left:1rem;
    font-size: 10px;
    font-weight: 200;
  }
  .item-lista {
    margin-left:-2rem;
    margin-right:0rem;
    align-items: center;
    font-weight: 200;
    font-size: 10px;
  }
  .copy {
    margin-left:1rem;
    font-weight: 200;
    font-size: 10px;
  }
  }
`;
