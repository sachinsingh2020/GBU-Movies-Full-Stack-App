import { Button, Checkbox, Container, FormLabel, HStack, Input, Select, Stack, VStack } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { createMovie } from '../../redux/actions/movie';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




const fileUploadCss = {
    cursor: 'pointer',
    marginLeft: '5%',
    padding: '.5rem 1rem',
    border: 'none',
    height: '100%',
    color: 'white',
    backgroundColor: '#19c37d',
    fontWeight: '500',
    borderRadius: '5px',
};

export const fileUploadStyle = {
    '&::file-selector-button': fileUploadCss,
};



const CreateMovie = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [filmIndustry, setFilmIndustry] = useState('');
    let [genre, setGenre] = useState([]);
    let [audio, setAudio] = useState([]);
    let [quality1080, setQuality1080] = useState({
        quality1080: "",
        quality1080link: ""
    });
    let [quality720, setQuality720] = useState({
        quality720: "",
        quality720link: ""
    });
    let [quality480, setQuality480] = useState({
        quality480: "",
        quality480link: ""
    });
    const [image, setImage] = useState("");

    const [isCheckbox1Checked, setIsCheckbox1Checked] = useState(false);
    const [isCheckbox2Checked, setIsCheckbox2Checked] = useState(false);
    const [isCheckbox3Checked, setIsCheckbox3Checked] = useState(false);

    const changeImageHandler = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }
    // useEffect(() => {
    //     console.log(quality1080);
    //     console.log(quality720)
    //     console.log(quality480)
    // }, [quality1080, quality720, quality480])

    const handleCheckbox1Change = (e) => {
        setIsCheckbox1Checked(e.target.checked);
    };
    const handleCheckbox2Change = (e) => {
        setIsCheckbox2Checked(e.target.checked);
    };
    const handleCheckbox3Change = (e) => {
        setIsCheckbox3Checked(e.target.checked);
    };

    const handleGenreFunction = (e) => {
        const selectedGenre = e.target.value;
        if (e.target.checked) {
            setGenre((prevGenre) => [...prevGenre, selectedGenre]);
        }
        else {
            setGenre((prevGenre) => prevGenre.filter((genre) => genre !== selectedGenre));
        }
    }

    const handleAudioFunction = (e) => {
        const selectedAudio = e.target.value;
        if (e.target.checked) {
            setAudio((prevAudio) => [...prevAudio, selectedAudio]);
        }
        else {
            setAudio((prevAudio) => prevAudio.filter((audio) => audio !== selectedAudio));
        }
    }


    const createMovieHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('releaseDate', releaseDate);
        formData.append('filmIndustry', filmIndustry);
        formData.append('genre', genre);
        formData.append('audio', audio);
        formData.append('quality1080', quality1080.quality1080);
        formData.append('quality1080link', quality1080.quality1080link);
        formData.append('quality720', quality720.quality720);
        formData.append('quality720link', quality720.quality720link);
        formData.append('quality480', quality480.quality480);
        formData.append('quality480link', quality480.quality480link);
        formData.append('file', image);

        await dispatch(createMovie(formData));
        navigate('/admindashboard')



    }

    const { message, error, loading } = useSelector((state) => state.movie);

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
        <Container color={'white'} maxW={["100vw", '80vw']} display={'flex'} flexDirection={"column"} justifyContent={'center'} alignItems={'center'}>
            <h1 style={{ fontSize: "40px", fontWeight: 'bold', fontFamily: " 'Stylish', sans-serif", padding: "1rem", width: "19rem", borderBottom: "3px solid #19c37d", color: "#19c37d" }}>CREATE MOVIE</h1>
            <Link to={`/`}>
                <Button position={"absolute"} top={["7rem", '2rem']} left={["40%", '18rem']} background={"#19c37d"} color={'white'} >Home</Button>
            </Link>

            <Box border={'2px solid #19c37d'} padding={'2rem'} w={['100%', '80%']} color={'#19c37d'} display={'flex'} flexDirection={'column'} alignItems={"center"} m={['8rem', '3rem']}>
                <HStack m={['.5rem 0', '1rem 0']} w={'100%'} justifyContent={'space-around'} >
                    <FormLabel w={['40%', '30%']} fontSize={['16px', '25px']} textAlign={'center'} >Movie Name: </FormLabel>
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type='text' w={['58%', '60%']} />
                </HStack>
                <HStack m={['.5rem 0', '1rem 0']} w={'100%'} justifyContent={'space-around'} >
                    <FormLabel w={['40%', '30%']} fontSize={['16px', '25px']} textAlign={'center'} >Release Date: </FormLabel>
                    <Input
                        value={releaseDate}
                        onChange={(e) => setReleaseDate(e.target.value)}
                        className="custom-input"
                        type='date' w={['58%', '60%']} style={{ color: 'white' }} />
                </HStack>
                <HStack m={['.5rem 0', '1rem 0']} w={'100%'} justifyContent={'space-around'}>
                    <FormLabel w={['40%', '30%']} fontSize={['16px', '25px']} textAlign={'center'}>Film Industry:  </FormLabel>
                    <Select
                        onChange={(e) => setFilmIndustry(e.target.value)}
                        w={['58%', '60%']} style={{ color: 'white' }} placeholder='Select option'>
                        <option style={{ color: "black" }} value='Bollywood'>Bollywood</option>
                        <option style={{ color: "black" }} value='Hollywood'>Hollywood</option>
                    </Select>
                </HStack>
                <HStack m={'3rem 0'} w={'100%'} justifyContent={'space-around'}>
                    <FormLabel w={['30%', '30%']} fontSize={['16px', '25px']} textAlign={'center'}>Genre:  </FormLabel>
                    <Stack spacing={5} direction='row' flexWrap={'wrap'} justifyContent={'center'} w={['78%', '65%']}>
                        <Checkbox className='checkBox' value={'Action'} colorScheme='green' onChange={handleGenreFunction} >
                            Action
                        </Checkbox>
                        <Checkbox className='checkBox' value={'Crime'} colorScheme='green' onChange={handleGenreFunction}  >
                            Crime
                        </Checkbox>
                        <Checkbox
                            value={'Thriller'}
                            onChange={handleGenreFunction}
                            colorScheme='green' >
                            Thriller
                        </Checkbox>
                        <Checkbox
                            value={'Comedy'}
                            onChange={handleGenreFunction}
                            colorScheme='green' >
                            Comedy
                        </Checkbox>
                        <Checkbox
                            value={'Horror'}
                            onChange={handleGenreFunction}
                            colorScheme='green' >
                            Horror
                        </Checkbox>
                        <Checkbox
                            value={'Romance'}
                            onChange={handleGenreFunction}
                            colorScheme='green' >
                            Romance
                        </Checkbox>
                        <Checkbox
                            value={'Adventure'}
                            onChange={handleGenreFunction}
                            colorScheme='green' >
                            Fantasy
                        </Checkbox>
                        <Checkbox
                            value={'Animation'}
                            onChange={handleGenreFunction}
                            colorScheme='green' >
                            Animation
                        </Checkbox>
                        <Checkbox
                            value={'Sci-Fi'}
                            onChange={handleGenreFunction}
                            colorScheme='green' >
                            Sci Fi
                        </Checkbox>
                        <Checkbox
                            value={'Mystery'}
                            onChange={handleGenreFunction}
                            colorScheme='green' >
                            Mystry
                        </Checkbox>
                        <Checkbox
                            value={'Drama'}
                            onChange={handleGenreFunction}
                            colorScheme='green' >
                            Drama
                        </Checkbox>

                    </Stack>
                </HStack>
                <HStack m={'1rem 0'} w={'100%'} justifyContent={'space-around'}>
                    <FormLabel w={['30%', '30%']} fontSize={['16px', '25px']} textAlign={'center'}>Audio:  </FormLabel>
                    <Stack spacing={5} direction='row' flexWrap={'wrap'} justifyContent={'center'} w={['65%', '60%']}>
                        <Checkbox
                            value={'English'}
                            onChange={handleAudioFunction}
                            colorScheme='green' >
                            English
                        </Checkbox>
                        <Checkbox
                            value={'Hindi'}
                            onChange={handleAudioFunction}
                            colorScheme='green' >
                            Hindi
                        </Checkbox>
                        <Checkbox
                            value={'Spanish'}
                            onChange={handleAudioFunction}
                            colorScheme='green' >
                            Spanish
                        </Checkbox>
                        <Checkbox
                            value={'Telegu'}
                            onChange={handleAudioFunction}
                            colorScheme='green' >
                            Telegu
                        </Checkbox>
                        <Checkbox
                            value={'Japanese'}
                            onChange={handleAudioFunction}
                            colorScheme='green' >
                            Japanese
                        </Checkbox>
                    </Stack>
                </HStack>
                <VStack m={'1rem 0'}>
                    <FormLabel fontSize={'25px'} textAlign={'center'}>Quality:  </FormLabel>
                    <HStack>
                        <Checkbox
                            value={'1080p'}
                            colorScheme="green" m={'0 2rem'} onChange={handleCheckbox1Change}>
                            1080p
                        </Checkbox>
                        <Input
                            value={quality1080.quality1080link}
                            onChange={(e) => setQuality1080({ ...quality1080, quality1080: 1080, quality1080link: e.target.value })}
                            type="text" placeholder="Link Of the Movie" disabled={!isCheckbox1Checked} />
                    </HStack>
                    <HStack>
                        <Checkbox
                            value={'720p'}
                            colorScheme="green" m={'0 2rem'} onChange={handleCheckbox2Change}>
                            720p
                        </Checkbox>
                        <Input
                            value={quality720.quality720link}
                            onChange={(e) => setQuality720({ ...quality720, quality720: 720, quality720link: e.target.value })}
                            type="text" placeholder="Link Of the Movie" disabled={!isCheckbox2Checked} />
                    </HStack>
                    <HStack>
                        <Checkbox
                            value={'480p'}
                            colorScheme="green" m={'0 2rem'} onChange={handleCheckbox3Change}>
                            480p
                        </Checkbox>
                        <Input
                            onChange={(e) => setQuality480({ ...quality480, quality480: 480, quality480link: e.target.value })}
                            type="text" placeholder="Link Of the Movie" disabled={!isCheckbox3Checked} />
                    </HStack>
                </VStack>
                <HStack m={['1rem 0', '1rem 0']} w={'100%'} justifyContent={'space-around'} >
                    <FormLabel w={['40%', '30%']} fontSize={['16px', '25px']} textAlign={'center'} >Movie Poster: </FormLabel>
                    <Input
                        accept="image/*"
                        required
                        type={'file'}
                        css={fileUploadStyle}
                        border={'none'}
                        w={['12rem', '18rem']}
                        h={['2.3rem', '2.5rem']}
                        onChange={changeImageHandler}
                    />
                </HStack>
                <Button
                    isLoading={loading}
                    onClick={createMovieHandler}
                    background={"#19c37d"} color={'white'} m={'2rem 0'}>Create</Button>
            </Box>
            <Footer />
        </Container>
    )
}

export default CreateMovie
