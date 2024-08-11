import "./Card.css";
export default function Card({ image, title, desc }) {
  return (
    <div className="main-div">
      <div className="content-container">
        <div>
          <img src={image} className="image" alt="imageofPizza"/>
        </div>

        <div>
          <h2>{title}</h2>
        </div>

        <div>
          <p className="desc">{desc}</p>
        </div>

        <div className="button">Read More</div>
      </div>
    </div>
  );
}