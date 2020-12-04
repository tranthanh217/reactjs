import React, { useState, useEffect } from "react";

const handleRemove = (e) =>{
    console.log(e.target.getAttribute("name"));
  }
function FormDetail(props) {
    
    var rows = [];
    for (var i = 0; i < props.rowNum; i++) {
        rows.push(i);
    } 
    const listRow = rows.map((row) =>
        <div id={row} class="row row-change position-relative st-hover ">
            <div class="col-6">
            <input type="text" name="sku" class="form-control sku" placeholder="input sku .."/>
            </div>
            <div class="col-6">
            <input type="text" name="price" class="form-control price" placeholder="input price .."/>
            </div>
            <div class="icon-action remove remove-action" name={row} onClick={handleRemove}><i class="fa fa-minus-circle" aria-hidden="true"></i></div>
        </div>
    );
    return(
        <div>
            {listRow}
        </div>
    );
}
export default FormDetail;