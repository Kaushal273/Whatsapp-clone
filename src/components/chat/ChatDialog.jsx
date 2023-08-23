import { Box, Dialog } from "@mui/material";
import Menu from "./menu/Menu";
import EmptyChat from "./chat/EmptyChat";



const dialogStyle = {
    height: '96%',
    width: '100%',
    margin: '20px',
    borderRadius: 0,
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'hidden'
}


const ChatDialog = () => {
    return(
        <Dialog
            open={true}
            PaperProps={{sx: dialogStyle}}
            hideBackdrop={true}
        >
            <Box>
                <Box>
                    <Menu/>
                </Box>
                <Box>
                    <EmptyChat />
                </Box>
            </Box>
        </Dialog>
    )
}

export default ChatDialog;