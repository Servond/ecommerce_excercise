import { Box } from "@chakra-ui/react";
import CustomButton from "./components/CustomButton";
import withStyles from "./components/withStyles";

const HOC = () => {
    const StyledButton = withStyles(CustomButton);

    return (
        <Box>
            <StyledButton content="Buttons" />
        </Box>
    )
}

export default HOC;