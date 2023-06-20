import { 
    Box, 
    Grid,
} from '@chakra-ui/react';

import CardItem from './components/CardItem';
import jsonProduct from '../../json-dummy/product.json';

const Card = () => {
    const productList = jsonProduct.product;
    return (
        <Box sx={{
            width: '100%',
            padding: '20px'
        }}>
            <Grid
                templateRows="repeat(5, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={4}
                height="250px"
            >
                { productList.length > 0  ? 
                    productList.map((item) => { 
                        return (
                        <CardItem item={item} />
                        )
                    })
                 : <></>
                }
            </Grid>
        </Box>
    )
}

export default Card;