import { Container } from '@chakra-ui/react'
import React from 'react'

const NotFound = () => {
    return (
        <Container color={'white'} border={'4px solid #137754'} maxW={['100vw', '80vw']} justifyContent={'center'} display={'flex'} fontSize={'30px'} fontWeight={'bold'} h={'40vh'} alignItems={'center'}>
            <h1>Not Found</h1>
        </Container>
    )
}

export default NotFound
