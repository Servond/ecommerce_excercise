import { Button } from "@chakra-ui/react";
// import math from "./components/math";

const LazyLoad = () => {
    // const sum = math(5, 6);
    // console.log(sum);
    return (
        <Button onClick={() => {
            import("./components/math").then((math) => console.log(math));
        }}>Sum</Button>
    )
}

export default LazyLoad;