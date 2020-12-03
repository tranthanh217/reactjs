import React, { useState } from "react";

function SelectStore() {
  const [show, setShow] = useState(false);
  return (
    <div className="col-12">
      <div className="row">
        <select className="custom-select d-block">
          <option value="">Choose store...</option>
          <option>st1</option>
        </select>
        <div className="addNewStrore">
          <div className="addStore btn " onClick={clickhandle}>
            <i className="fa fa-database" aria-hidden="true"></i> Add New Store
          </div>
        </div>
      </div>
    </div>
  );
}
export default SelectStore;
