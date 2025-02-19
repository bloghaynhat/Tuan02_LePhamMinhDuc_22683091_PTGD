import React, {useState} from "react";

function Btap02() {

    const [inputA, setInputA] = useState(0);
    const [inputB, setInputB] = useState(0);
    const [operator, setOperator] = useState("")
    const [result, setResult] = useState(0);

    function handleChangeOp(e){
        setOperator(e.target.value);
    }

    function handleChangeA(e){
        setInputA(e.target.value);
    }
    function handleChangeB(e){
        setInputB(e.target.value);
    }

    function handleClick(){
        const a = parseFloat(inputA);
        const b = parseFloat(inputB);
        
        switch(operator){
            case('+'): 
                setResult(a + b);
                break;
            case('-'): 
                setResult(a - b);
                break;
            case('*'): 
                setResult(a * b);
                break;
            case('/'): 
                setResult(a / b);
                break;
        }
    }

    return ( <div>
        <input placeholder="Nhap so thu nhat" type="text" onChange={handleChangeA} />
        <input placeholder="Nhap so thu hai" type="text"onChange={handleChangeB} />
        <br />
        <div id="opCssChung">
        <div className="opCss">
        <input className="radioBtn" onChange={handleChangeOp} type="radio" name="operator" value='+'/>Cong
        </div>

        <div className="opCss">
        <input className="radioBtn" onChange={handleChangeOp} type="radio" name="operator" value='-'/>Tru
        </div>

        <div className="opCss">
        <input  className="radioBtn" onChange={handleChangeOp} type="radio" name="operator" value='*'/>Nhan
       </div>

        <div className="opCss">
        <input  className="radioBtn" onChange={handleChangeOp} type="radio" name="operator" value='/'/>Chia
       </div>
        </div>
       

       <br />
        <button onClick={handleClick} id="tinhtoanbtn">Tinh toan</button>
        <br />
        <span>Ket qua:{result}</span>
        </div> );
}

export default Btap02;