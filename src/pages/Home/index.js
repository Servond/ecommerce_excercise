import { useState, useEffect } from 'react';
import { Box, Image, Button } from '@chakra-ui/react';
import axios from 'axios';

import Card from '../../components/Card';

const Home = () => {
    // const [dogs, setDogs] = useState("");

    const register = async () => {
        const res = await axios.post("https://minpro-blog.purwadhikabootcamp.com/api/auth/", {
            username: "bryan",
            email: "bryan.karta@purwadhika.com",
            phone: "08123123123",
            password: "jcwd0110",
            confirmPassword: "jcwd0110"
        });

        console.log(res);
    }

    const verify = async () => {
        try {
            const res = await axios.patch("https://minpro-blog.purwadhikabootcamp.com/api/auth/verify", 
            {},  
            {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJyeWFuIiwiZW1haWwiOiJicnlhbi5rYXJ0YUBwdXJ3YWRoaWthLmNvbSIsInBob25lIjoiMDgxMjMxMjMxMjMiLCJwYXNzd29yZCI6IiQyYiQxMCRlOUZCdC93MHNkUFVWNlE0TmY4L3IuWC9YNEp2RC4xN2pqLnY5UlduMnZjQUFkUTFyNVU1aSIsImlkIjo0NjMsImlzVmVyaWZpZWQiOmZhbHNlLCJpYXQiOjE2ODc0MDI2NzcsImV4cCI6MTY4NzQwNjI3N30.8ek7vRVeuEUi37zD7iPhGL31DjMl0Mo-rsFX5KZR9Hc" 
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