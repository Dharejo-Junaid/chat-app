import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField, Typography } from "@mui/material";
import CallDialogElement from "./CallDialogElement";

const CallDialog = ({open, hanldeClose}: any) => {
    return (
        <Dialog open={open} onClose={hanldeClose} fullWidth maxWidth="xs">
            <DialogTitle>
                Start Call
            </DialogTitle>

            <DialogContent >
                <Stack spacing={2.5} m={1}>
                    <TextField label="Name" size="small"/>
                    <CallDialogElement id="0" name="Junaid" img="some image"/>
                    <CallDialogElement id="1" name="Junaid" img="some image"/>
                    <CallDialogElement id="2" name="Junaid" img="some image"/>
                    <CallDialogElement id="3" name="Junaid" img="some image"/>
                </Stack>
            </DialogContent>

            <DialogActions sx={{ margin: "12px" }}>
                <Button onClick={hanldeClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}

export default CallDialog;