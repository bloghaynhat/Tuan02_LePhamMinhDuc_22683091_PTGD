import React, {useState} from "react";
import "./cssChung.css"

function Btap01() {
    const [result, setResult] = useState(0);
    
    function handleClick(){
        const a = document.getElementById('inputA').value;
        const b = document.getElementById('inputB').value;
        
        setResult(parseFloat(a) + parseFloat(b));
    }

    return ( <div>
        <input placeholder="Nhap so thu nhat" type="text" name="" id="inputA" />
        <span>+</span>
        <input placeholder="Nhap so thu hai" type="text" name="" id="inputB" />
        <span> = </span>
        <span>{result}</span>
        
        <button onClick={handleClick} id="tinhtoanbtn">Tinh toan</button>
    </div> );
}

export default Btap01;