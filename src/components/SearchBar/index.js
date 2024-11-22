
import Button from '@mui/material/Button';
import { IoIosSearch } from "react-icons/io";

const SearchBar=()=>{
    return(
        <>
            <div className='headerSearch ml-3 mr-3'>
                <input type='text' placeholder='Search for Products ....'/>
                <Button><IoIosSearch/></Button>
            </div>
        </>
    )
}

export default SearchBar;