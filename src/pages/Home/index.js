import { useState, useEffect } from 'react';
import { Box, Image } from '@chakra-ui/react';
import axios from 'axios';

import Card from '../../components/Card';

const Home = () => {
    // const [dogs, setDogs] = useState("");
    
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
        </Box>
    );
}

export default Home;