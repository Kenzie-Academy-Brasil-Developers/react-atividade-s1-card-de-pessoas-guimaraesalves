import "./styles.css";

function DevDate(props) {
  return (
    <div className="DevCard">
      <span>
        <p>Dev: {props.name}</p>
        <p>Idade: {props.age}</p>
        <p>País: {props.country}</p>
      </span>
    </div>
  );
}

export default DevDate;
