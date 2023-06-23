import { 
    Box, 
    Flex, 
    HStack, 
    Text,
    Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import NavbarMenu from './components/NavbarMenu';
import Logo from '../../assets/logo/logo.png';

const Navbar = () => {
    return (
        <Box sx={{
            borderBottom: '1px solid lightGrey',
            height: '80px'
        }}>
           <Flex sx={{
                justifyContent: 'center'
           }}>
                <HStack sx={{
                    width: '80%',
                    justifyContent: 'space-between',
                    padding: '5px',
                }}>
                    <Box>
                        <Link to="/">
                            <HStack>
                                <Image boxSize="65px" src={Logo} alt="logo" />
                                <Text sx={{
                                    fontSize: '20px',
                                    fontWeight: '400'
                                }}>Ecommerce-Store</Text>
                            </HStack>
                        </Link>           
                    </Box>
                    <NavbarMenu />
                    
                </HStack>
            </Flex> 
        </Box>
    )
}

export default Navbar;