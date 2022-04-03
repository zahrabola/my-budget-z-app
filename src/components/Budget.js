import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import BudgetView from "./BudgetView";
 const Budget = () => {
const { budget, dispatch } = useContext(AppContext);

const handleEditClick = () => {
  setIsEditing(true);
};
const handleClickSave = (value) => {
    dispatch({
      type: "BUDGET_SET",
      payload: value,
    });
  };

     return (
       <div className="alert alert-secondary">
         <BudgetView
           handleEditClick={handleEditClick}
           budget={budget}
         />
       </div>
     );
 };

 export default Budget;