import { Button } from "@chakra-ui/react";

const CustomButton = (props) => {
    const { style, content, variant } = props;
    return (
        <Button variant={variant} style={style}>{content}</Button>
    )
}

// const CustomButton = (props) => {
//     return (
//         <Button style={props.style}>{props.content}</Button>
//     )
// }

export default CustomButton;