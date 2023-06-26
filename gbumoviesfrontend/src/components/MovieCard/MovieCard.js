import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const MovieCard = ({ movieData }) => {
    const movieAudio = movieData.audio.join(',').split(',').join('-');

    return (
        <>
            <Box margin={['.4rem .4rem', '1rem .8rem']} textAlign={"center"} w={['9.2rem', '13rem']} h={['27rem', '33rem']} background={"#36363b"}>
                <Image h={['14rem', '18rem']} w={'100%'} src={movieData.image.url} alt={movieData.name} />
                <Box fontSize={['14px', '18px']} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} padding={['.3rem', '.5rem']} h={['12rem', '12rem']}>
                    <Text color={"white"} fontWeight={"bold"}>{movieData.name} </Text>
                    <Text color={"white"} fontWeight={"bold"}>[{`${String(movieData.releaseDate).split('T')[0]}`}]</Text>
                    <Text color="white" fontWeight="bold">
                        [{movieAudio}]
                    </Text>
                    <Text color={"white"} fontWeight={"bold"}>
                        [
                        {movieData.quality.map((item) => `${item.qualityName}p`).join('-')}
                        ]
                    </Text>
                </Box>
            </Box>
        </>
    )
}

export default MovieCard
