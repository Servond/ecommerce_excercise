import { 
    Box, 
    Flex, 
    VStack, 
    Text,
    Image,
    GridItem,
    Button
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { addToCart } from '../../../redux/reducer/CartReducer';

const CardItem = ({ item }) => {
    const dispatch = useDispatch();

    return (
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
    )
}

export default CardItem;