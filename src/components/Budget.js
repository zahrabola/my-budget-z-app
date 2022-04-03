import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import BudgetView from "./BudgetView";
import BudgetEdit from "./BudgetEdit";
const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleClickSave = (value) => {
    dispatch({
      type: "SET_BUDGET",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div className="alert alert-secondary ">
      {isEditing ? (
        <BudgetEdit handleClickSave={handleClickSave} budget={budget} />
      ) : (
        <BudgetView handleEditClick={handleEditClick} budget={budget} />
      )}
    </div>
  );
};

export default Budget;
