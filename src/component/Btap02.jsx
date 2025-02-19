import React, {useState} from "react";

function Btap02() {

    // const [operator, setOperator] = useState("")
    const [result, setResult] = useState(0);

    // function handleChangeOp(e){
    //     setOperator(e.target.value);
    // }

    // function handleClick(){
    //     const a = parseFloat(document.getElementById('inputA').value);
    //     const b = parseFloat(document.getElementById('inputB').value);
        
    //     switch(op){
    //         case('+'): setResult(a + b)
    //         case('-'): setResult(a - b)
    //         case('*'): setResult(a * b)
    //         case('/'): setResult(a / b)
    //     }
    // }

    return ( <div>
        <input placeholder="Nhap so thu nhat" type="text" name="" id="inputA" />
        <br />
        <input placeholder="Nhap so thu hai" type="text" name="" id="inputB" />
        <br />
        <input onChange={handleChangeOp} type="radio" name="operator" value='+'/>+
        <input type="radio" name="operator" value='-'/>-
        <input type="radio" name="operator" value='*'/>*
        <input type="radio" name="operator" value='/'/>/
        <br />
        <button onClick={handleClick}>Tinh toan</button>
        <br />
        <span>Ket qua:{result}</span>
        </div> );
}

export default Btap02;