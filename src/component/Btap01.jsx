import React, {useState} from "react";

function Btap01() {
    const [result, setResult] = useState(0);
    
    function handleClick(){
        const a = document.getElementById('inputA').value;
        const b = document.getElementById('inputB').value;
        
        setResult(parseFloat(a) + parseFloat(b));
    }

    return ( <div>
        <input placeholder="Nhap so thu nhat" type="text" name="" id="inputA" />
        <input placeholder="Nhap so thu hai" type="text" name="" id="inputB" />
        
        <button onClick={handleClick}>Tinh toan</button>
        <span>Ket qua: {result}</span>
    </div> );
}

export default Btap01;