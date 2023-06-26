import { Box, Button, Container, HStack, Image, Stack, VStack } from '@chakra-ui/react';
import Navbar from '../Navbar/Navbar'
import React, { useEffect } from 'react'
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';
import "./MovieDetails.css"
import { getAMovie } from '../../redux/actions/movie';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';

const MovieDetails = () => {
    const { id } = useParams();
    console.log(id)
    const dispatch = useDispatch();

    const getmovieDetails = async () => {
        await dispatch(getAMovie(id));
    }

    useEffect(() => {
        getmovieDetails();
        // eslint-disable-next-line
    }, [])

    const { movie, loading } = useSelector(state => state.movie);

    let movieAudio = "";
    let movieGenre = "";
    if (movie) {
        console.log(movie);
        movieAudio = movie.audio.join(',').split(',').join('-');
        movieGenre = movie.genre.join(',').split(',').join('-');
    }



    const movieQualityClicked = (movieUrl) => {
        window.open(movieUrl, '_blank');
    }
    return (
        <Container maxW={['98vw', '80vw']} color={"white"}>
            <Navbar />
            <Box border={'4px solid #377f7e'} minH={'48vh'}>
                <Stack direction={['column', 'row']} >
                    <VStack w={['100%', '50%']}>
                        { loading ? <Loader /> :
                            movie && movie && movie.image && (
                                <Image src={movie.image.url} alt={movie.name} />
                            )}
                    </VStack>
                    <VStack className='movieDetailBox' w={['100%', '50%']} fontSize={'25px'}>
                        <HStack>
                            { loading ? <Loader /> :
                                movie && movie ? <VStack textAlign={'center'} p={"1rem 0"}>
                                    <h2 style={{ borderBottom: "2px solid #319795", color: "#319795", fontWeight: "bold", margin: "2rem 0" }}>Movie Details</h2>
                                    <h1> Name: {movie.name}</h1>
                                    <h1> Release Date: [{`${String(movie.releaseDate).split('T')[0]}`}]</h1>
                                    <h1>Film Industry: {movie.filmIndustry}</h1>
                                    <h1>Genre: [{movieGenre}]</h1>
                                    <h1>Audio: [{movieAudio}]</h1>
                                    <h1>Quality: [{
                                        movie.quality.map((item) => `${item.qualityName}p`).join('-')
                                    }]</h1>
                                </VStack> : null
                            }

                        </HStack>
                        <hr />
                        <HStack>
                            <VStack p={"1rem 0"}>
                                <h2 style={{ borderBottom: "2px solid #319795", color: "#319795", fontWeight: "bold", margin: "1rem 0" }}>Story Line</h2>
                                <p style={{ fontSize: "18px", padding: '.5rem 1rem' }}>Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov (Alfie Allen) and his thugs steal John's prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile, Iosef's father (Michael Nyqvist) -- John's former colleague -- puts a huge bounty on John's head.

                                    In New York City, John Wick prepares to exact vengeance against the High Table while hiding underground with the Bowery King. He travels to Morocco and kills the Elder, the "one who sits above the Table".
                                </p>
                            </VStack>
                        </HStack>
                    </VStack>
                </Stack>
                <hr />
                <VStack>
                    <HStack>
                        <VStack p={"1rem 0"} textAlign={'center'}>
                            <h2 style={{ borderBottom: "2px solid #319795", color: "#319795", fontWeight: "bold", margin: "1rem 0", fontSize: '25px' }}>Download Links</h2>
                            {
                                movie && movie && movie.quality.map((item, index) => (
                                    <Box m={'.5rem 0'} display={'flex'} flexDirection={'column'} justifyContent={"center"} alignItems={"center"}>
                                        <h1 style={{ fontFamily: " 'Stylish', sans-serif", fontSize: '25px', padding: '.5rem 0' }}>Download {movie.name} in {item.qualityName}</h1>
                                        <Button onClick={() => { movieQualityClicked(item.qualityLink) }} className="download-button" w={'10rem'} background={"#319795"} color={"white"}>Download in {item.qualityName}</Button>
                                    </Box>
                                ))
                            }
                        </VStack>
                    </HStack>
                </VStack>
            </Box>
            <Footer />
        </Container>
    )
}

export default MovieDetails
