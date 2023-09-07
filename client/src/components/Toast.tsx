import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/slices/snackbar";

const Toast = () => {

    const snackbar = useSelector((state: any) => state.snackbar);
    const dispatch = useDispatch();

    return (
        <Snackbar
            open={snackbar.open}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            autoHideDuration={4000}
            onClose={() => dispatch(setOpen<any>({ open: false }))}
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