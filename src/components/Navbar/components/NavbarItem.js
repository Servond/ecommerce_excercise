import { Box, HStack, Image, Text } from "@chakra-ui/react"

const NavbarItem = ({ cartItem }) => {
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

export default NavbarItem;