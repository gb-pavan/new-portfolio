import './index.css';

function CardDisplay({ object }) {
const { image, description } = object;


return (
<div className="tech-card">
  <img className="tech-img" src={image} alt={description} />
</div>
);
}

export default CardDisplay;