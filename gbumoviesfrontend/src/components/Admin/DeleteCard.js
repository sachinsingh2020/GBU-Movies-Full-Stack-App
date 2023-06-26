import { Box, Image, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteMovie, getMovies } from '../../redux/actions/movie';
import { Button } from '@chakra-ui/button';
import { toast } from 'react-hot-toast';
import { useState } from 'react';

const DeleteCard = ({ movie, keyword, currentPage }) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);


    const deleteMovieHandler = async (movieId) => {
        setLoading(true);
        await dispatch(deleteMovie(movieId));
        await dispatch(getMovies(keyword, currentPage));
        toast.success('Movie Deleted Successfully');
        setLoading(false);
    }



    return (
        <Box w={["15rem", "18rem"]}>
            <Stack direction={'row'} justifyContent={'space-evenly'}>
                <Image borderRadius={'7px'} w={'6rem'} h={'8rem'} src={movie.image.url} alt={movie.name} />
                <VStack fontWeight={'bold'} textAlign={'center'} >
                    <h1>{movie.name}</h1>
                    <h1>[{`${String(movie.releaseDate).split('T')[0]}`}]</h1>
                    <h1 >{movie.filmIndustry}</h1>
                    <Button
                        isLoading={loading}
                        onClick={(e) => deleteMovieHandler(movie._id)}
                        className="no-hover" background={'#8B0000'} color={'white'}>Delete</Button>
                </VStack>
            </Stack>
        </Box>
    )
}

export default DeleteCard
