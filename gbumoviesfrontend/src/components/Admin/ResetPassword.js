import { Box, Button, Container, Heading, Input } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
} from '@chakra-ui/react'
import React from 'react'
import Footer from '../Footer/Footer'
// import { useParams } from 'react-router-dom';


const ResetPassword = () => {
    // const { resetToken } = useParams();
    // console.log(resetToken);

    return (

        <Container color={'white'} maxW={["100vw", '80vw']} display={'flex'} flexDirection={"column"} justifyContent={'center'} alignItems={'center'}>
            <Heading fontSize={["30px", "40px"]} width={['18rem', '24rem']} style={{ fontWeight: 'bold', fontFamily: " 'Stylish', sans-serif", padding: "1rem", borderBottom: "3px solid #19c37d", color: "#19c37d" }}>RESET PASSWORD</Heading>

            <Box color={'#19c37d'} display={'flex'} flexDirection={'column'} alignItems={"center"} m={['12.5rem', '13.4rem']}>
                <FormControl w={["60vw", '25vw']}>
                    <FormLabel>Enter New Password</FormLabel>
                    <Input type='email' />
                    <Button background={"#19c37d"} color={'white'} mt={'2rem'}>Submit</Button>
                </FormControl>
            </Box>
            <Footer />
        </Container>
    )
}

export default ResetPassword
