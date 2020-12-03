import React, { useState, useEffect } from "react";

function FormAction() {
  //    const [] = useState*();
  useEffect(() => {});
  return (
    <div className="col-md-8">
      <div id="formHtml" className="input-form p-3 border rounded-top">
        <div
          id="1"
          className="row row-change position-relative st-hover first-row"
        >
          <div className="col-6">
            <input
              type="text"
              name="sku"
              className="form-control sku"
              placeholder="input sku .."
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              name="price"
              className="form-control price"
              placeholder="input price .."
            />
          </div>
          <div className="icon-action remove remove-action">
            <i className="fa fa-minus-circle" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div className="addRow border-top-0 border rounded-bottom">
        <div className="addRow-btn btn btn-secondary">Add Row</div>
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
