import React from 'react';
const UserContext = React.createContext({
    users: []
  });
  

function Card(props) {
  return (
    <div className="card mb-3">
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && <h5 className="card-title">{props.title}</h5>}
        {props.text && <p className="card-text">{props.text}</p>}
        {props.body}
        {props.status && <div id="createStatus">{props.status}</div>}
      </div>
    </div>
  );
}

export default Card;
export { UserContext };

