import { 
    Box, 
    Button,
    useDisclosure,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';

import { logoutSuccess } from '../../../redux/reducer/AuthReducer';

import LoginModal from "./LoginModal";

const LoginButton = () => {
    const dispatch = useDispatch();
    const login = useSelector((state) => state.AuthReducer.login)
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box>
            { !login ? <Button onClick={onOpen}>Login</Button> : <Button onClick={() => dispatch(logoutSuccess())}>Logout</Button>}
            <LoginModal isOpen={isOpen} onClose={onClose} />
        </Box>
    )
}

export default LoginButton;