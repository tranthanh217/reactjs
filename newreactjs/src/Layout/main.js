import React from "react";
import SelectStore from "../component/selectStore";
import FormAction from "../component/formAction";
import ListLinkChange from "../component/listLinkChange";
function Main() {
  return (
    <main>
      <div className="container my-4">
        <form>
          <SelectStore />
          <div className="row my-5">
            <FormAction />
            <div className="col-md-4">
              <ListLinkChange />
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
export default Main;
