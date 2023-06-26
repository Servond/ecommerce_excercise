import { Box } from "@chakra-ui/react";
import CustomButton from "./components/CustomButton";
import CustomText from "./components/CustomText";
import withStyles from "./components/withStyles";

const HOC = () => {
    // const StyledButton = withStyles(CustomButton);
    const style = {
        padding: '5px',
        borderRadius: '6px',
        margin: '10px'
    }
    const textStyle = {
        margin: '10px',
        fontSize: '15px',
        fontWeight: 400,
    }

    const textContent = "Lorem Ipsum"
    // return (
    //     <Box>
    //         <StyledButton asd="asd" content="Click Me!" />
    //     </Box>
    // )

    return (
        <Box>
            <CustomButton style={style} variant="outline" content="Click Me!" />
            <CustomText style={textStyle}>Button Increment</CustomText>
        </Box>
    )
}

export default HOC;