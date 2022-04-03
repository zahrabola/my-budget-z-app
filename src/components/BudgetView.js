import React from "react";

const BudgetView = (props) => {
    return (
      <div>

      <span>Budget: £{props.budget}</span>
 
          <button
            type="button"
            class="btn btn-primary btn-sm "
            id="edit-btn"
            onClick={props.handleEditClick}
          >
            Edit
          </button>

      </div>
   
    
      
    );
};
export default BudgetView;