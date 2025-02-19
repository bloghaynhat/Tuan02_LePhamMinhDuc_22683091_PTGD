import React, {useState} from "react";
import "./cssChung.css"

function Btap03() {
    const[name, setName] = useState("");
    const [result, setResult] = useState("");

    function handleChange(e){
        setName(e.target.value)
    }
    
    function handleClick(){
        setResult(name);
    }

    return ( <div>
        <input placeholder="Nhap ten cua ban" type="text" onChange={handleChange}/>
        <br />
        <button onClick={handleClick} id="tinhtoanbtn">Click me</button>
        <br />
        <span>Ten cua ban: {result}</span>
    </div> );
}

export default Btap03;