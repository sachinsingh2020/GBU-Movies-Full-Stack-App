import { Button, HStack, Input } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteSearch = () => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        if (keyword.trim()) {
            navigate(`/deletemovie/${keyword}`);
        } else {
            navigate('/deletemovie');
        }
    }, [keyword, navigate]);

    return (
        <HStack m={'1rem 0'}>
            <Input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                type="search"
                placeholder="Search"
                w={['60vw', '50vw']}
            />
            <Button onClick={() => { }} background={'#19c37d'} color={'white'}>
                Search
            </Button>
        </HStack>
    );
};

export default DeleteSearch;
