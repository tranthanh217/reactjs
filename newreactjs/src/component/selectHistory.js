import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function SelectHistory(props) {
    const [show, setShow] = useState(false);
    const [listSave, setListSave] = useState([]);

    const handleClose = () => {
        setShow(false)
    };
    const handleShowListHistory = () => {
        setShow(true);
        const listKeySave = Object.entries(localStorage);
        const listKeyCut = [];
        for (let index = 0; index < listKeySave.length; index++) {
            const elmtFirst = listKeySave[index][0];
            listKeyCut.push(elmtFirst);
        }
        const listKeySort = listKeyCut.sort();
        const listKeyFinal = [];
        for (let i = 0; i < listKeyCut.length; i++) {
            listKeyFinal.push(listKeySort[i]);
        }
        setListSave(listKeyFinal);
    }
    const handleClear = () => {
        localStorage.clear();
        setListSave([]);
    };
    const loadFormTemplate = (value) =>{
        const data = localStorage.getItem(value);
        const obj = JSON.parse(data);
        props.loadFormSaved(value,obj);
        handleClose();
    };
    return(
        <div className="list-form-saved">           
            <div
            className="loadSave btn "
            data-toggle="modal"
            data-target="#listSave"
            onClick={handleShowListHistory}
          >
            Get template form
          </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>List form saved</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div id="keys" className="list-key">
                    {listSave.map((list,index) => (
                        <div key={index} className="listIteam" onClick={() =>loadFormTemplate(list)}  >{list.slice(14,list.legnth)}</div>
                    ))}
					</div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClear}>
                    Clear list
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
export default SelectHistory;