import { Autocomplete, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField, Typography } from "@mui/material";

const MEMBERS = ["Name 1", "Name 2", "Name 3", "Name 4"];

const CreateNewGroupDialog = ({open, hanldeClose}: any) => {
    return (
        <Dialog open={open} fullWidth maxWidth="xs" onClose={hanldeClose}>
            <DialogTitle>
                Create New Group
            </DialogTitle>

            <DialogContent >
                <Stack spacing={2} m={1}>
                    <TextField label="Name" size="small"/>
                    <Typography variant="caption">Members</Typography>
                    {/* TODO => implement Autocomplete */}
                    {/* <Autocomplete options={MEMBERS} multiple freeSolo /> */}
                </Stack>
            </DialogContent>

            <DialogActions sx={{ margin: "12px" }}>
                <Button onClick={hanldeClose}>Cancel</Button>
                <Button variant="contained" onClick={hanldeClose}>Create</Button>
            </DialogActions>
        </Dialog>
    );
}

export default CreateNewGroupDialog;