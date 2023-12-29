import { Dialog ,Box ,Typography,List,ListItem,styled } from "@mui/material"

// import { qrCodeImage } from "../../constants/data"
import {GoogleLogin} from '@react-oauth/google';
import myimage from "../../../src/one.png"
import { jwtDecode } from 'jwt-decode';


const Component = styled(Box)`
display:flex;
bckgroud-color:#000;
`

const Title = styled(Typography)`
font-size: 26px;
font-color:#525252;
font-weight: 300;
font-family:inherit;
margin-bottom: 30px;
`;

const StyledList = styled(List)`
& >li (
    padding:0;
    margin-top:15px;
    font-size:18px;
    line-height:20px;
    font-color: #4a4a4a;
)
`;


const Container = styled(Box)`
padding: 56px 0 56px 56px;
`;

const QRCode = styled('img')(
    {
        height: 264,
        width: 264,
        margin: '50px 0 0 50px'
    }

)

const dialogStyle ={
    height:'96%',
    marginTop:'12%',
    width:'60%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overflow:'hidden',


}
const LoginDialog = () =>{

    const onLoginSuccess = (res) =>{
    const decoded = jwtDecode(res.credential)
    console.log(decoded);
    }

    const onLoginError =(res) =>{
        console.log("lf",res)
    }


    return(
       <Dialog  open={true}
       PaperProps={{sx:dialogStyle}} 
       hideBackdrop={true}
       > 
         
         <Component>
            <Container>
               <Title>Use WhatsApp on your computer</Title>
               <StyledList>
                <ListItem>
                1. Open WhatsApp on your phone
                </ListItem>
                <ListItem>
                2. Tap Menu or settings and Select Linked Devices
                </ListItem>
                <ListItem>
                    3. Tap on Link a Device
                </ListItem>
                <ListItem>
                4. Point your phone to this screen to capture the QR code
                </ListItem>
               </StyledList>
            </Container>

            <Box  style={{position:'relative'}}  >
                <QRCode src={myimage}  alt="qr code " />
                <Box  style={{position: 'absolute', top:'50%' ,transform:'translateX(25%)' }}  >
                    <GoogleLogin
                     onSuccess={onLoginSuccess}
                     onError= {onLoginError}
                    
                    />
                </Box>
            </Box>
         </Component>
       </Dialog>

       
    )
}

export default LoginDialog