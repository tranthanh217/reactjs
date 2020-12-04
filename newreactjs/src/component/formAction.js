import React, { useState, useEffect } from "react";
import FormDetail from "./formDetail";

function FormAction() {
  const [numRow,setNumRow] = useState(1);

  const handleAddSecondInput = () =>{
    setNumRow(numRow + 1);
  };
  return (
    <div className="col-md-8">
      <div id="formHtml" className="input-form p-3 border rounded-top">
       
        <FormDetail rowNum={numRow} />
       
      </div>
      <div className="addRow border-top-0 border rounded-bottom">
        <div className="addRow-btn btn btn-secondary" onClick={handleAddSecondInput}>Add Row</div>
      </div>
      <div className="submit-btn pt-3">
        <div className="save-template">
          <input
            type="text"
            name="formsave"
            className="form-control formSave"
            placeholder="Save file name"
          />
        </div>
        <div className="list-form-saved">
          <div
            className="loadSave btn "
            data-toggle="modal"
            data-target="#listSave"
          >
            Get template form
          </div>
        </div>
        <div className="submit btn btn-primary">
          Submit
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FormAction;
