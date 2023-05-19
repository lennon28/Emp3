import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import "./Button.css"
import { useNavigate } from 'react-router-dom';

const ButtonGroup = (props) => {

  const navigate = useNavigate();
  const handleSubmit = e => {
    navigate("/");
    };
    

  
  return (
    <div className="button-group">
      <button className="button" onClick={props.handleSubmit}>
        <FontAwesomeIcon icon={faSave} />
        Save
      </button>
      <button className="button" >
        <FontAwesomeIcon icon={faTrash} />
        Clear
      </button>
      <button className="button" onClick={handleSubmit}>
        <FontAwesomeIcon icon={faEdit} />
        Exit
      </button>
    </div>
  );
};

export default ButtonGroup;
