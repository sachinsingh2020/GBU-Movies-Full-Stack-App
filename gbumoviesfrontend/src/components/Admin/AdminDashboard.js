import { Button, Container, Stack } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Footer/Footer'
import NormalCard from './NormalCard'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/user'



const AdminDashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async (e) => {
        e.preventDefault();
        await dispatch(logout());
        navigate('/adminlogin');
    }

    return (
        <Container color={'white'} maxW={["100vw", '80vw']} display={'flex'} flexDirection={"column"} justifyContent={'center'} alignItems={'center'}>
            <h1 style={{ fontSize: "40px", fontWeight: 'bold', fontFamily: " 'Stylish', sans-serif", padding: "1rem", width: "17rem", borderBottom: "3px solid #19c37d", color: "#19c37d" }}>HELLO ADMIN</h1>
            <Button onClick={logoutHandler} position={"absolute"} top={["7rem", '2rem']} right={["20%", '15rem']} background={"#19c37d"} color={'white'} >Logout</Button>
            <Link to={`/`}>
                <Button position={"absolute"} top={["7rem", '2rem']} left={["20%", '18rem']} background={"#19c37d"} color={'white'} >Home</Button>
            </Link>

            <Box color={'#19c37d'} display={'flex'} flexDirection={'column'} alignItems={"center"} m={['8rem', '13rem']}>
                <Stack direction={['column', 'row']} w={['60vw', '50vw']} justifyContent={['', 'space-around']} >
                    <Link to={'/createmovie'}>
                        <NormalCard color={'#0c0c74'} index={'1'} title="Create a Movie" />
                    </Link>
                    <Link to={'/deletemovie'}>
                        <NormalCard color={'#8d0049'} index={'2'} title="Delete a Movie" />
                    </Link>

                </Stack>
            </Box>
            <Footer />
        </Container>
    )
}

export default AdminDashboard
