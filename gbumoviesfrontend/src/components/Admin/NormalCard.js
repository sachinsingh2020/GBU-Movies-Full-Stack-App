import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { FaPlusCircle } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const NormalCard = ({ color, index, title }) => {
    return (
        <Box mt={['2rem','']} display={'flex'} flexDirection={"column"} alignItems={"center"} background={color} color={'white'} borderRadius={'10px'} p={'1rem'}>
            {
                index === "1" ? <FaPlusCircle size={50} color={'#19c37d'} mb={'.5rem'} /> : null
            }
            {
                index === "2" ? <FaTrashAlt size={50} color={'#19c37d'} mb={'.5rem'} /> : null
            }

            <Heading style={{ fontFamily: " 'Stylish', sans-serif" }} children={title}></Heading>
        </Box>
    )
}

export default NormalCard
