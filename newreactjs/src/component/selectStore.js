import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function SelectStore() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState("");
  const [addListStores,setAddListStores] = useState([]);
  const [formData, updateFormData] = useState([]);
  
  const addListStrore = (e) => {
    setAddListStores([
      ...addListStores,
      {
        id: addListStores.length + 1,
        URL:e.domain,
        hostName:e.host,
        databaseName:e.dbname,
        userDB:e.userdb,
        passwordDB:e.passworddb
      }
    ]);
  };
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleClose = () => {
      setShow(false)
  };
  const handleSave = (e) =>{
    e.preventDefault();
    setLoading("loading");
    addListStrore(formData);
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
          {addListStores.map((list) =>(
            <option key={list.id} value={list.id}>{list.databaseName}</option>
          ))}
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
        <form>
        <Modal.Body>
        <div className="modal-body">
          <div className="domain">
            <input
              type="text"
              name="domain"
              className="form-control mb-3"
              placeholder="https://example.com"
              onChange={handleChange} 
            />
          </div>
          <div className="host">
            <input
              type="text"
              name="host"
              className="form-control mb-3"
              placeholder="host"
              onChange={handleChange} 
            />
          </div>
          <div className="dbname">
            <input
              type="text"
              name="dbname"
              className="form-control mb-3"
              placeholder="database name"
              onChange={handleChange} 
            />
          </div>
          <div className="userdb">
            <input
              type="text"
              name="userdb"
              className="form-control mb-3"
              placeholder="user db"
              onChange={handleChange} 
            />
          </div>
          <div className="password ">
            <input
              type="text"
              name="passworddb"
              className="form-control mb-3"
              placeholder="password db"
              onChange={handleChange} 
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
        </form>
      </Modal>
    </div>
  );
}
export default SelectStore;
