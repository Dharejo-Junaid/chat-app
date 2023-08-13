import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = () => {
    return (
        <TextField 
            label="Search" 
            size="small" 
            sx={{ margin: "20px" }}
            InputProps={{
                endAdornment: <InputAdornment position="end"> 
                    <SearchIcon /> 
                </InputAdornment>
            }}
        />
    );
}

export default Searchbar;