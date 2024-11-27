
import Button from '@mui/material/Button';
import { useState } from 'react';
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";


const QuantityBox = () => {

    const [inputVal, setInputval] = useState(1);


    const minus=()=>{
        if(inputVal!==1 && inputVal>0){
            setInputval(inputVal-1);
        }
    }
    const plus=()=>{
        setInputval(inputVal+1);
    }

    return (
        <div className='quantityDrop d-flex align-items-center'>
            <Button onClick={minus}><FaMinus /></Button>
            <input type="text" value={inputVal}/>
            <Button onClick={plus}><FaPlus /></Button>
        </div>
    )
}

export default QuantityBox;