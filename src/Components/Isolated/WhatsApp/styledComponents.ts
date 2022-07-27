import { styled } from '@mui/material/styles';
import { Avatar } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
/*--------------------------------------------------------*/

export const WPPBubble = styled(Avatar)`
   background-color: #04bf04d8;
   width: 5rem;
   height: 5rem;
   position: fixed;
   margin-left: 93vw;
   margin-top: 75vh;
   z-index: 1;
   cursor: pointer;
   transition: 0.5s;

   &:hover {
      margin-left: 92vw;
      margin-top: 71vh;
      width: 6rem;
      height: 6rem;
   }
`;

export const WPPIcon = styled(WhatsAppIcon)(`
    font-size: 4rem;
   `);
