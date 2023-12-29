import LoginDialog from "./account/LoginDialog";
import {AppBar , Toolbar ,styled ,Box } from '@mui/material'
 

const component = styled(Box)`
height: 100vh;
background:#f2f2f2;

`;


const Header = styled(AppBar)`
height:220px; 
background-color:#29f909;
box-shadow: none;
`; 


 const Messenger = () => {
    return (
    <component>
        <Header>
            <Toolbar>

            </Toolbar>
        </Header>
        <LoginDialog />

    </component>
    )
 } 
 export default Messenger;