import React, {useState} from "react";
import "./cssChung.css"

function Btap04() {
    const [content, setContent] = useState("");
    const thongtin = {
        content1 : "Content 1",
        content2 : "Content 2",
        content3 : "Content 3",
        content4 : "Content 4",
    }

    function handleChangeContent(e){
        setContent(e.target.value);
    }

    return ( <div>
        <button onChange={setContent} value='content1' >Noi Dung 1</button>
        <button onChange={setContent} value='content2' >Noi Dung 2</button>
        <button onChange={setContent} value='content3' >Noi Dung 3</button>
        <button onChange={setContent} value='content4' >Noi Dung 4</button>
        <br />
        <div>
            {content}
        </div>

    </div> );
}

export default Btap04;