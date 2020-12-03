import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function SelectStore() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default SelectStore;
