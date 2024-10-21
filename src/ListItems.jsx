import React from "react";
import Delete from "./assets/delete.png"

const ListItems=(props)=>{
    
    return(
        <>
            <div className="listitems">
                <ul><input style={{marginRight:"8px",color:"red"}} type="checkbox" checked={props.checked} onChange={props.handleCheck}></input>
                <li key={props.index} className="typeditems" style={{textDecoration: props.checked && "line-through"}}>{props.name}</li>
                <img src={Delete} className="delbtn" onClick={props.del}></img>
                </ul>
            </div>
        </>
    )
}

export default ListItems