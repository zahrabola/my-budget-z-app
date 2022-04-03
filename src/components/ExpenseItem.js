import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className=" badge bg-primary rounded-pill mr-3">
          {" "}
          £{props.cost}{" "}
        </span>
        <FaTimes size="1.3em" onClick={handleDeleteExpense} />
      </div>
    </li>
  );
};

export default ExpenseItem;
