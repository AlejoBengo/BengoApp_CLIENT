/*IMPORT UTILITIES*/
import { Link } from 'react-router-dom';
/*IMPORT CSS*/
import { Container, Title, Text, ButtonBox } from './styledComponents';

const Navbar = () => {
   return (
      <Container>
         <Title>Bengoechea Automotores</Title>
         <ButtonBox>
            <Link to='/' style={{ textDecoration: 'none' }}>
               <Text>AUTOS</Text>
            </Link>
            <Link to='/us' style={{ textDecoration: 'none' }}>
               <Text>NOSOTROS</Text>
            </Link>
            <Link to='/contact' style={{ textDecoration: 'none' }}>
               <Text>CONTACTO</Text>
            </Link>
            <Link to='login' style={{ textDecoration: 'none' }}>
               <Text>SIGN IN</Text>
            </Link>
         </ButtonBox>
      </Container>
   );
};

export default Navbar;
