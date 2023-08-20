import { InputAdornment, TextField } from "@mui/material";
import { MagnifyingGlass } from "@phosphor-icons/react";

const Searchbar = () => {
    return (
        <TextField 
            placeholder="Search" 
            size="small"
            InputProps={{
                endAdornment: <InputAdornment position="end"> 
                    <MagnifyingGlass color="#4B4B4B" fontSize="large"/> 
                </InputAdornment>
            }}
        />
    );
}

export default Searchbar;