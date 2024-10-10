import './Card.css'

function Card(props) {
  return (
    <>
<div className="main">
<div className="card">
        <div className="imgBox">
          <img src={props.img} alt={props.title} />
        </div>

        <div className="contentBox">
          <h3>{props.title}</h3>
          <h2 className="price">${props.price}</h2>
          <a href="#" className="buy">Buy Now</a>
        </div>
      </div>
</div>
    </>
  );
}

export default Card;
