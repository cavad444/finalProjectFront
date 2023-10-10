import { Link } from "react-router-dom";
import "./about.css";
function AboutPage() {
  return (
    <div className="about-us">
      <div className="about">
        <img
          src={process.env.PUBLIC_URL + "images/logo-ecmmerce.png"}
          className="pic"
          alt="about image"
        />
        <div className="text">
          <h2>About Us</h2>
          <h5>
            E-commerce & <span>AzStore</span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            natus ad sed harum itaque ullam enim quas, veniam accusantium, quia
            animi id eos adipisci iusto molestias asperiores explicabo cum vero
            atque amet corporis! Soluta illum facere consequuntur magni. Ullam
            dolorem repudiandae cumque voluptate consequatur consectetur, eos
            provident necessitatibus reiciendis corrupti!
          </p>
          <div className="data">
            <Link to="/" className="hire">
              Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutPage;
