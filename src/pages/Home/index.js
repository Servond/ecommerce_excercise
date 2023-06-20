import { 
    Box, 
    Flex, 
    VStack, 
    Text,
    Image
} from '@chakra-ui/react';

import Card from '../../components/Card';

const Home = () => {
    return (
        <Box sx={{
            display: 'flex',
            marginTop: '50px',
        }}>
            <Card />
        </Box>
    );
}

export default Home;