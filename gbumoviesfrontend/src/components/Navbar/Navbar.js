import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Box, Button, HStack, Stack } from '@chakra-ui/react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        if (keyword.trim()) {
            navigate(`/${keyword}`);
        } else {
            navigate('/');
        }
    }, [keyword, navigate]);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    };

    const bollywoodFunction = (e) => {
        e.preventDefault();
        navigate(`/Bollywood`);
    };

    const hollywoodFunction = (e) => {
        e.preventDefault();
        navigate('/Hollywood');
    };

    const qualityFunction = (e, quality) => {
        e.preventDefault();
        navigate(`/${quality}`);
    };

    return (
        <div className="fullNavSection">
            <Stack className="navbar" direction={['column', 'row']}>
                <div className="logo">
                    <a href="/">
                        <h2>GBU Movies</h2>
                    </a>
                </div>
                <Box
                    className="rightTopNav"
                    display={'flex'}
                    flexDirection={['column', 'row']}
                    alignItems={['center', '']}
                >
                    <Box className="searchSection" m={['0', '0 3rem']}>
                        <input
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            onKeyPress={handleKeyPress}
                            style={{ color: 'black' }}
                            type="search"
                            placeholder="Search..."
                        />
                        <Button>
                            <AiOutlineSearch />
                        </Button>
                    </Box>
                    <Box className="adminLogin" m={['1rem', '']}>
                        <Link to="/adminlogin">
                            <Button _hover={{ bg: '#137754', color: 'white' }} background={'#19c37d'} color={'white'}>
                                Admin
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Stack>
            <HStack className="movieIndustry">
                <Stack
                    m={['1rem 0', '.5rem 0']}
                    direction={['column', 'row']}
                    alignItems={'center'}
                    justifyContent={['center', 'center']}
                >
                    <Link to="/">
                        <Button w={['8rem', 'auto']} className="btn-grad3">
                            Home Page
                        </Button>
                    </Link>
                    <HStack mt={['-1rem', '0rem']}>
                        <Button onClick={bollywoodFunction} className="btn-grad">
                            Bollywood
                        </Button>
                        <Button onClick={hollywoodFunction} className="btn-grad2">
                            Hollywood
                        </Button>
                    </HStack>
                </Stack>
            </HStack>
            <HStack className="movieIndustry">
                <Stack direction={['column', 'row']} alignItems={'center'} justifyContent={['center', 'center']}>
                    <Button className='btn-grad4' onClick={(e) => { qualityFunction(e, '1080') }} >1080p</Button>
                    <HStack mt={['-1rem', '0rem']}>
                        <Button className='btn-grad5' onClick={(e) => { qualityFunction(e, '720') }} >720p</Button>
                        <Button className='btn-grad6' onClick={(e) => { qualityFunction(e, '480') }} >480p</Button>
                    </HStack>
                </Stack>
            </HStack>
            <HStack className="movieIndustry">
                <Link to='/movierequest'>
                    <button className='btn-grad7'>Request For a Movie</button>
                </Link>

            </HStack>
        </div>

    )
}

export default Navbar
