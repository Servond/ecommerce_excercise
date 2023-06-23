import { Box, Button } from '@chakra-ui/react';
import axios from 'axios';

import Card from '../../components/Card';

const Home = () => {
    // const [dogs, setDogs] = useState();

    const register = async () => {
        const res = await axios.post("https://minpro-blog.purwadhikabootcamp.com/api/auth/", {
            username: "bryanss",
            email: "bryan.kartass@purwadhika.com",
            phone: "081231231453",
            password: "jcwd0110",
            confirmPassword: "jcwd0110"
        });
    }

    const verify = async () => {
        try {
            const res = await axios.patch("https://minpro-blog.purwadhikabootcamp.com/api/auth/verify", 
            {},  
            {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJyeWFuc3MiLCJlbWFpbCI6ImJyeWFuLmthcnRhc3NAcHVyd2FkaGlrYS5jb20iLCJwaG9uZSI6IjA4MTIzMTIzMTQ1MyIsInBhc3N3b3JkIjoiJDJiJDEwJGJ3d3V0em9zLnU5aWpSL1VWS2Y0Wi5jblUvYTl5cmpVR0JJL1c3aTAycUhDLjZ6ckRmLkguIiwiaWQiOjY0MCwiaXNWZXJpZmllZCI6ZmFsc2UsImlhdCI6MTY4NzUwNzM0MiwiZXhwIjoxNjg3NTEwOTQyfQ.Z5c2MijxGJ-EkH9nP6_oUJvVJIFeioRa_R6Fm0OXKOU" 
                }
            })
            console.log(res);
        }
        catch (err) {
            console.log(err);
        }
    }
    
    // const fetchData = async () => {
    //     try {
    //         const { data } = await axios.get("http://localhost:3000/dogs")
    //         // setDogs(data.message);
    //         console.log(data);
    //     } catch(err) {
    //         console.log(err)
    //     }
    // }
    // const postData = async () => {
    //     try {
    //         // const send = await axios.patch("http://localhost:3000/users/create-user", obj);
    //         const send = await axios.post("http://localhost:3000/users", {
    //             firstName: "john",
    //             lastName: "smith",
    //             email: "john@gmail.com",
    //             password: "asd123"
    //         }); 

    //          console.log(send);
    //     } catch(err) {
    //         console.log(err)
    //     }
    // }

    // const obj = {
    //     nama: 'doni',
    //     age: 22
    // }

    

    // const fetchJson = async () => {
    //     try {
    //         // const res = await fetch("https://dog.ceo/api/breeds/list/all", {
    //         //     method: "POST"
    //         // });

    //         // Membuat request dengan method get ke api
    //         const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    //             method: "GET"
    //         });
    //         // memparsing data json menjadi sebuah object javascript
    //         const json = await res.json();

    //         console.log(json.message);
    //         setDogs(json.message)
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    // getFunction(fetchData())

    // useEffect(() => {
    //     fetchData();
    //     // postData();
    //     // fetchJson();
    // }, []);

    return (
        <Box sx={{
            display: 'flex',
            marginTop: '50px',
            textAlign: 'center'
        }}>
            {/* { dogs ? <Image srkc={dogs} alt="dogs" /> : <>tidak</> } */}
            <Card />
            <Button onClick={() => register()}>Register</Button>
            <Button onClick={() => verify()}>verify</Button>
        </Box>
    );
}

export default Home;