import React, { useState, useEffect } from "react";
import SelectHistory from "./selectHistory";

function FormAction() {
  const [todos, setTodos] = React.useState([{id:1,valSKU:"",valPrice:""}]);
  const [loading, setLoading] = useState("");

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        valSKU:"",
        valPrice:""
      }
    ]);
  };
  const onSubmitRow = e => {
    e.preventDefault();
    addTodo();
  };
  const removeTodo = todoId => {
    if(todos.length > 1){
      const updatedTodos = todos.filter(todo => todo.id !== todoId);
      setTodos(updatedTodos);
    }
  };
  const saveForm = () =>{
    // list json sku and price
    var list=[];
    for (const r of document.querySelectorAll("div.row-change")){
      for(const i of r.querySelectorAll("input")){
        var listItem = {};
        const fields=r.querySelectorAll("input");
        const skuF=fields[0];
        const priceF=fields[1];

        listItem.sku = skuF.value;
        listItem.price = priceF.value;
      }
      list.push(listItem);
    }
    var listJsonStr= JSON.stringify(list);
    // save form
    if (typeof(Storage) !== "undefined") {
      var d = new Date();
      var n = d.getTime();
      var fieldSave = document.querySelector(".formSave");
      fieldSave.value !== '' ? localStorage.setItem(n+'_'+fieldSave.value, listJsonStr) :  localStorage.setItem(n+'_'+d , listJsonStr);
      // fieldSave.value = "";
    }
  };
  const submitForm = () =>{
    setLoading("loading");
    saveForm();
    
    setTimeout(() => {
      setLoading("");
    }, 1000);
  };
  const loadFormSaved = (val,obj) =>{
    let listNewReLoad = [];
    obj.map((e,index)=>(
      listNewReLoad.push({
        id: index,
        valSKU:e.sku,
        valPrice:e.price
      } )
    ));
    setTodos(listNewReLoad);
    var fieldSave = document.querySelector(".formSave");
    fieldSave.value = val.slice(14,val.length);
  };
  return (
    <div className="col-md-8">
      <div id="formHtml" className="input-form p-3 border rounded-top">
      {todos.map(todo => (
          <div key={todo.id} id={todo.id} className="row row-change position-relative st-hover ">
              <div className="col-6">
              <input type="text" name="sku" className="form-control sku" defaultValue={todo.valSKU}  placeholder="input sku .."/>
              </div>
              <div className="col-6">
              <input type="text" name="price" className="form-control price" defaultValue={todo.valPrice} placeholder="input price .."/>
              </div>
              <div className="icon-action remove remove-action" onClick={() => removeTodo(todo.id)}></div>
          </div>
          ))}
      </div>
      <div className="addRow border-top-0 border rounded-bottom">
        <div className="addRow-btn btn btn-secondary" onClick={onSubmitRow}>Add Row</div>
      </div>
      <div className="submit-btn pt-3">
        <div className="save-template">
          <input
            type="text"
            name="formsave"
            className="form-control formSave"
            placeholder="Save file name"
            defaultValue=""
          />
        </div>
          <SelectHistory loadFormSaved={loadFormSaved} />
        <div className="submit btn btn-primary" onClick={submitForm}>
          Submit
          <div className={`spinner-border ${loading}`} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FormAction;
