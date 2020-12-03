import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function SelectStore() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState("");

  const handleClose = () => {
      setShow(false)
  };
  const handleSave = () =>{
    setLoading("loading");
    setTimeout(() => {
      setShow(false)
      setLoading("");
    }, 1000);
  }
  const handleShow = () => setShow(true);
  return (
    <div className="col-12">
      <div className="row">
        <select className="custom-select d-block">
          <option value="">Choose store...</option>
          <option>st1</option>
        </select>
        <div className="addNewStrore">
          <div className="addStore btn " variant="primary" onClick={handleShow}>
            <i className="fa fa-database" aria-hidden="true"></i> Add New Store
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add information store</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="modal-body">
          <div className="domain">
            <input
              type="text"
              name="domain"
              className="form-control mb-3"
              placeholder="https://example.com"
            />
          </div>
          <div className="host">
            <input
              type="text"
              name="host"
              className="form-control mb-3"
              placeholder="host"
            />
          </div>
          <div className="userdb">
            <input
              type="text"
              name="userdb"
              className="form-control mb-3"
              placeholder="database user"
            />
          </div>
          <div className="password">
            <input
              type="text"
              name="passworddb"
              className="form-control mb-3"
              placeholder="password"
            />
          </div>
          <div className="dbname">
            <input
              type="text"
              name="dbname"
              className="form-control mb-3"
              placeholder="database name"
            />
          </div>
         
          <div className={`spinner-border ml-2 ${loading}`} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default SelectStore;
