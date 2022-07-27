import colorPalette from 'Global/Palette/index';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const Container = styled(Box)(`
   width: 100vw;
   height: 5rem;
   background-color: ${colorPalette.black.main};
   display: flex;
   align-items: center;
   justify-content: space-around;
`);

export const Title = styled(Box)(`
   font-family: Helvetica;
   font-weight: 400;
   font-size: 2rem;
   color: ${colorPalette.white.light};
`);

export const ButtonBox = styled(Typography)(`
   width: 50rem;
   padding: 0 0 0 15rem;
   display: flex;
   justify-content: space-around;
`);

export const Text = styled(Typography)(`
   font-family: Helvetica;
   font-weight: 400;
   font-size: 1rem;
   color: ${colorPalette.white.light};
   cursor: pointer;
   transition: 0.3s;

   &:hover {
      color: ${colorPalette.main.light};
   };
`);
