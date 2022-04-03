import React, { useState } from "react";

const BudgetEdit = (props) =>{
const [value, setValue] = useState(props.budget);
return (
  <div>
    <input
      required="required"
      type="number"
      class="form-control mr-3"
      id="name"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
    <button
      type="button"
      class="btn btn-primary "
      onClick={() => props.handleClickSave(value)}
    >
      Save
    </button>
  </div>
);
    
  

};

export default BudgetEdit;