import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/slices/snackbar";

const Toast = () => {

    const snackbar = useSelector((state) => state.snackbar);
    const dispatch = useDispatch();

    return (
        <Snackbar
            open={snackbar.open}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            autoHideDuration={4000}
            onClose={() => dispatch(setOpen({ open: false }))}
        >
            <Alert
                severity={snackbar.severity}
            >
                {snackbar.message}
            </Alert>
        </Snackbar>
    );
}

export default Toast;