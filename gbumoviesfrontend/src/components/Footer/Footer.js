import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <Box w={['100%','78vw']} padding={'4'} bg="#36363b" minH={'10vh'} className="footer">
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width={'full'}>
          <Heading className='footerHeading' children={'All Right Reserved'} color="white" />
          <Heading children={'Made By Sachin Singh'} fontFamily={'body'} size={'sm'} color={'yellow.400'} />
        </VStack>
        <HStack spacing={['2', '8']} justifyContent={'center'} color={'white'} fontSize='50'>
          <a href="https://www.linkedin.com/in/sachin-singh-040290218/" rel="noreferrer" target={'_blank'}>
            <FaLinkedin size={'2rem'} color={'white'} />
          </a>
          <a href="https://www.instagram.com/__sachin__singh_1/" rel="noreferrer" target={'_blank'}>
            <FaInstagram size={'2rem'} color={'white'} />
          </a>
          <a href="https://twitter.com/SachinS63756600" rel="noreferrer" target={'_blank'}>
            <FaTwitter size={'2rem'} color={'white'} />
          </a>
        </HStack>
      </Stack>
    </Box>
  )
}

export default Footer;
