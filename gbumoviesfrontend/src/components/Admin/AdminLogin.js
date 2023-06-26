import { Box, Button, Container, Input } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/user';
import { toast } from 'react-hot-toast';

const AdminLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = async (e) => {
        e.preventDefault();
        await dispatch(login(email, password));
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            loginHandler(e);
        }
    };

    const { message, error, isAuthenticated, loading } = useSelector(state => state.user);

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }
        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
        }
        if (isAuthenticated) {
            navigate('/admindashboard');
        }
    }, [dispatch, error, message, navigate, isAuthenticated])

    return (
        <Container color={'white'} maxW={["100vw", '80vw']} display={'flex'} flexDirection={"column"} justifyContent={'center'} alignItems={'center'}>
            <h1 style={{ fontSize: "40px", fontWeight: 'bold', fontFamily: " 'Stylish', sans-serif", padding: "1rem", width: "17rem", borderBottom: "3px solid #19c37d", color: "#19c37d" }}>ADMIN LOGIN</h1>
            <Link to={`/`}>
                <Button position={"absolute"} top={["7rem", '2rem']} left={["42%", '18rem']} background={"#19c37d"} color={'white'} >Home</Button>
            </Link>

            <Box color={'#19c37d'} display={'flex'} flexDirection={'column'} alignItems={"center"} m={['4rem 8rem', '3rem 9rem']}>
                <FormControl w={["60vw", '25vw']} display={'flex'} flexDirection={'column'}>
                    <FormLabel>Email address</FormLabel>
                    <Input
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyPress={handleKeyPress} // Call handleKeyPress function when Enter key is pressed
                    />
                    <FormLabel mt={'1rem'}>Password</FormLabel>
                    <Input
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyPress={handleKeyPress} // Call handleKeyPress function when Enter key is pressed
                    />
                    <Link to={'/forgetpassword'} style={{ textDecoration: "none" }}>
                        <Button variant='link' m={'1rem 0'}>Forget Password</Button>
                    </Link>
                    <Button isLoading={loading} onClick={loginHandler} background={"#19c37d"} color={'white'} mt={'1rem'}>Submit</Button>
                </FormControl>
            </Box>
            <Box border={'2px solid #19c37d '} color={'white'} w={'60vw'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} textAlign={'center'} fontFamily={"'Stylish', sans-serif"} fontSize={['16px', '20px']} m={'2rem 0'} p={'.3rem'}>
                <h1>
                    This Application is Just for Showing as a Project
                </h1>
                <h1>Made By Sachin Singh</h1>
                <h1>For Login</h1>
                <h1>Email: sachinsingh@gmail.com</h1>
                <h1>Password: Sachin@2002</h1>
            </Box>
            <Footer />
        </Container>
    )
}

export default AdminLogin
