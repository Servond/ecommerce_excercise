import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { 
    Box,
    Menu, 
    Button, 
    MenuButton, 
    MenuList, 
    Icon, 
    useDisclosure,
    Text,
    HStack,
    Image,
    Flex
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { AiOutlineShoppingCart } from 'react-icons/ai'

const NavbarMenu = () => {
    const cartItem = useSelector((state) => state.CartReducer.cart)
    const { isOpen, onOpen, onClose } = useDisclosure();

    // const cartQuantity = cartItem.reduce(
    //     (quantity, item) => item.quantity + quantity,
    //     0
    // );

    const CardItem = () => {
        return cartItem?.map((item) => {
            return (
                <Box sx={{
                    height: '70px',
                    padding:'10px',
                    marginBottom: '10px',
                    borderBottom: '1px solid lightGrey'
                }} 
                key={item.Nama}
                >
                    <HStack>
                        <Image boxSize="50px" src={item?.Images} />
                        <Text>{item.Nama}</Text>
                        <Text>{item.Deskripsi}</Text>
                    </HStack>       
                </Box>
            )
        })
    }
        

    return (
        <Box>
            <Menu isOpen={isOpen}>
                <Link to="/cart">
                    <MenuButton
                        sx={{
                                backgroundColor: 'white'
                            }} 
                        as={Button}
                        onMouseEnter={onOpen}
                        onMouseLeave={onClose}
                    >
                        <Icon boxSize="25px" as={AiOutlineShoppingCart} />
                        <Flex
                            borderRadius="full"
                            justify='center'
                            align='center'
                            bg='red'
                            style={{
                                color: "white",
                                width: "1.1rem",
                                height: "1.1rem",
                                position: "absolute",
                                top: 0,
                                right: 0,
                                transform: "translate(15%, 0%)",
                            }}
                        >
                            { cartItem.length }
                        </Flex>
                    </MenuButton>
                </Link>
                <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                    <Box sx={{
                        width: '400px', 
                        padding:'20px',
                        overflow: 'scroll',
                        maxHeight: '400px'
                    }}>
                        <Text sx={{
                            fontSize: '16px',
                            fontWeight: '600'
                        }}>
                            Keranjang Saya
                        </Text>
                        <CardItem />
                    </Box>
                </MenuList>
            </Menu>
        </Box>
    )
}

export default NavbarMenu;