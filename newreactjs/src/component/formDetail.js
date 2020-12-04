import React, { useState, useEffect } from "react";


function FormDetail(props) {
    
    const handleRemove = (e) =>{
        props.removehandle(e.target.getAttribute("id"));
    }
    return(
        <div>
            { props.rowNum.map((row) =>
                <div id={row} className="row row-change position-relative st-hover ">
                    <div className="col-6">
                    <input type="text" name="sku" className="form-control sku" placeholder="input sku .."/>
                    </div>
                    <div className="col-6">
                    <input type="text" name="price" className="form-control price" placeholder="input price .."/>
                    </div>
                    <div className="icon-action remove remove-action" id={row} onClick={handleRemove}></div>
                </div>
            )}
        </div>
    );
}
export default FormDetail;