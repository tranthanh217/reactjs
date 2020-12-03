import React from "react";

function Footer() {
  return (
    <div>
      <footer></footer>

      <div
        className="modal fade"
        id="addStoreModal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <form>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add infor store
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary submit-host">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        className="modal fade"
        id="listSave"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close closeForm"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div id="keys" className="list-key"></div>
            </div>
            <div className="modal-footer">
              <div className="clearHistory btn">clear all list</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
