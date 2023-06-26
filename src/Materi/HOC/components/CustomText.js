import { Text } from "@chakra-ui/react";

const CustomText = (props) => {
    const { style, children } = props;
    return <Text style={style}>{children}</Text>
}

export default CustomText;