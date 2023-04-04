import React from "react";
function Card(props) {
  const handleToggle = () => {
    if (props.selected) {
      props.onDeselect();
    } else {
      props.onSelect();
    }
  };

  return (
    <div className="col mb-5">
      <div className="card" style={{ width: "18rem" }}>
        <input
          type="checkbox"
          className="form-check-input position-absolute top-0 start-0 m-3"
          checked={props.selected}
          onChange={handleToggle}
        />
        <img src={props.src.url} className="card-img-top" alt={props.src.url} />
        <p className="card-text">ID: {props.src.id}</p>
        <p className="card-text">Author: {props.src.author}</p>
      </div>
    </div>
  );
}

export default Card;

