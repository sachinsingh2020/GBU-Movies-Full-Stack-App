import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const RedirectedPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        navigate(`/${1}`);
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            Redirecting...
        </div>
    )
}

export default RedirectedPage
