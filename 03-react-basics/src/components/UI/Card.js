import './css/Card.css';

const Card = (props) => {
  const cssClasses = 'card ' + props.className;
  return <div className={cssClasses}>{props.children}</div>;
};

export default Card;
