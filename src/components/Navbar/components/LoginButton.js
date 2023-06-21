import { 
    Box, 
    Button,
    useDisclosure,
} from '@chakra-ui/react';

import LoginModal from "./LoginModal";

const LoginButton = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const login = localStorage.getItem("login");
    return (
        <Box>
            { !login ? <Button onClick={onOpen}>Login</Button> : <Button onClick={() => localStorage.removeItem("login")}>Logout</Button>}
            <LoginModal isOpen={isOpen} onClose={onClose} />
        </Box>
    )
}

export default LoginButton;