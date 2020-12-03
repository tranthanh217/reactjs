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
                <div className="spinner-border ml-2" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
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
