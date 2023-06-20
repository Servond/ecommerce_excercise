import { 
    Box, 
    Flex, 
    VStack, 
    Text,
    Image,
    Grid,
    GridItem,
    Button
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { addToCart } from '../../redux/reducer/CartReducer';

const productList = [
    {
        Images: 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/01/07073657/ketahui-makanan-yang-dapat-merusak-kulit-halodoc.jpg',
        Nama: 'Barang 1',
        Harga: 20000,
        Deskripsi: 'Ini Barang 1'
    },
    {
        Images: 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/01/07073657/ketahui-makanan-yang-dapat-merusak-kulit-halodoc.jpg',
        Nama: 'Barang 2',
        Harga: 20000,
        Deskripsi: 'Ini Barang 2'
    },
    {
        Images: 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/01/07073657/ketahui-makanan-yang-dapat-merusak-kulit-halodoc.jpg',
        Nama: 'Barang 3',
        Harga: 20000,
        Deskripsi: 'Ini Barang 3'
    },
    {
        Images: 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/01/07073657/ketahui-makanan-yang-dapat-merusak-kulit-halodoc.jpg',
        Nama: 'Barang 4',
        Harga: 20000,
        Deskripsi: 'Ini Barang 4'
    },
    {
        Images: 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/01/07073657/ketahui-makanan-yang-dapat-merusak-kulit-halodoc.jpg',
        Nama: 'Barang 5',
        Harga: 20000,
        Deskripsi: 'Ini Barang 5'
    },
    {
        Images: 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/01/07073657/ketahui-makanan-yang-dapat-merusak-kulit-halodoc.jpg',
        Nama: 'Barang 5',
        Harga: 20000,
        Deskripsi: 'Ini Barang 5'
    },
    {
        Images: 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/01/07073657/ketahui-makanan-yang-dapat-merusak-kulit-halodoc.jpg',
        Nama: 'Barang 5',
        Harga: 20000,
        Deskripsi: 'Ini Barang 5'
    },
];

const Card = () => {
    const dispatch = useDispatch();

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
                { productList  ? 
                    productList.map((item) => { return (
                    <GridItem colSpan={1}>
                        <Flex sx={{
                            border: '1px solid lightGrey',
                            borderRadius: '6px',
                            padding: '20px',
                            boxShadow: '1px 1px   grey',
                        }}>
                            <VStack sx={{
                                alignItems: 'left'
                            }}>
                                <Box>
                                    <Image src={item.Images}/>
                                </Box>
                                <Box>
                                    <Text>
                                        {item.Nama}
                                    </Text>
                                    <Text>
                                        {item.Deskripsi}
                                    </Text>
                                </Box>
                                <Button onClick={() => dispatch(addToCart(item))}>Add To Cart</Button>
                            </VStack>
                        </Flex>
                    </GridItem>
                    )}
                    )
                 : <></>}
            </Grid>
        </Box>
    )
}

export default Card;