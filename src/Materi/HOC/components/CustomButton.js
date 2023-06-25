import { Button } from "@chakra-ui/react";

const CustomButton = (props) => {
    return (
        <Button style={props.style}>{props.content}</Button>
    )
}

export default CustomButton;