import React from 'react'
import Footer from '../Footer/Footer'
import { Box, Button, Container, FormLabel, Heading, Input, Stack } from '@chakra-ui/react'
import Navbar from '../Navbar/Navbar';
import { movieRequest } from '../../redux/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';


const MovieRequest = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [requestedMovie, setRequestedMovie] = useState('');

    const SendRequestHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('requestedMovie', requestedMovie);

        await dispatch(movieRequest(formData));
    }

    const { loading, message, error } = useSelector(state => state.user);

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }

        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
        }

    }, [dispatch, error, message]);

    return (
        <Container color={'white'} maxW={['98vw', '80vw']}>
            <Navbar />
            <Box p={'1.5rem 0'} fontFamily={"'Stylish', sans-serif"} display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
                <Heading fontFamily={"'Stylish', sans-serif"} children="Movie Request" />
                <Stack justifyContent={['center', 'space-evenly']} alignItems={['center', 'center']} minW={'50%'} direction={['column', 'row']} spacing={'24px'} mt={'2rem'}>
                    <FormLabel mt={['', '-.5rem']} fontSize={['25px', '25px']} minW={'30%'}>Your Name</FormLabel>
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        outline={'none'} w={'65%'} type='text' mt={['-1.3rem', '']} />
                </Stack>
                <Stack justifyContent={['center', 'space-evenly']} alignItems={['center', 'center']} minW={'50%'} direction={['column', 'row']} spacing={'24px'} mt={'2rem'}>
                    <FormLabel mt={['', '-.5rem']} fontSize={['25px', '25px']} minW={'30%'}>Your Email</FormLabel>
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        outline={'none'} w={'65%'} type='email' mt={['-1.3rem', '']} />
                </Stack>
                <Stack justifyContent={['center', 'space-evenly']} alignItems={['center', 'center']} minW={'50%'} direction={['column', 'row']} spacing={'24px'} mt={'2rem'}>
                    <FormLabel mt={['', '-.5rem']} fontSize={['25px', '25px']} minW={'30%'}>Requested Movie</FormLabel>
                    <Input
                        value={requestedMovie}
                        onChange={(e) => setRequestedMovie(e.target.value)}
                        outline={'none'} w={'65%'} type='text' mt={['-1.3rem', '']} />
                </Stack>
                <Button
                    isLoading={loading}
                    onClick={SendRequestHandler}
                    m={'2rem 0'} fontSize={'20px'}>
                    Send Request
                </Button>
            </Box>
            <Footer />
        </Container>
    )
}

export default MovieRequest
