import { Button, HStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { totalMoviesCount } from '../../redux/actions/movie';
import { useDispatch } from 'react-redux';


const Pagination = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const activePage = 1;
    const firstPage = 1;
    const totalMoviesFunction = async () => {
        await dispatch(totalMoviesCount())
    }

    useEffect(() => {
        totalMoviesFunction();
        // eslint-disable-next-line
    }, [])

    // const { totalMovies } = useSelector(state => state.movie);
    // if (!totalMovies) return null;
    const totalMovies = 500;
    const moviesPerPage = 10;
    const totalPages = Math.ceil(totalMovies.totalMovies / moviesPerPage);
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    // const handlePageChange = (page) => {
    //     setActivePage(page);
    // };


    const nextButtonHandler = (activePage) => {
        const newPage = Number(activePage) + 1;
        navigate(`/${newPage}`);
    }

    const previousButtonHandler = (activePage) => {
        const newPage = Number(activePage) - 1;
        navigate(`/${newPage}`);
    }

    return (
        <div>
            <HStack color={'white'} m={'1rem'}>
                {activePage > 1 ?
                    <Button
                        _hover={{ bg: '#137754', color: 'white' }}
                        onClick={() => previousButtonHandler(activePage)} background="#19c37d" color={'white'} size="sm" disabled={true}>
                        Previous
                    </Button> : null
                }

                <Button
                    _hover={{ bg: '#137754', color: 'white' }}
                    background={activePage === 1 ? '#8b0000' : '#19c37d'}
                    color={activePage === 1 ? 'white' : 'white'}
                    size="sm"
                    onClick={() => navigate(`/${firstPage}`)}
                    disabled={true}
                >
                    {firstPage}
                </Button>

                {
                    activePage > 3 ? <Button
                        _hover={{ bg: '#137754', color: 'white' }}
                        background="#19c37d" color={'white'} size="sm" disabled={true}>
                        {"..."}
                    </Button> : null
                }
                {activePage > 2 ?
                    <Button
                        _hover={{ bg: '#137754', color: 'white' }}
                        onClick={() => navigate(`/${activePage - 1}`)}
                        background="#19c37d" color={'white'} size="sm" disabled={true}>
                        {activePage - 1}
                    </Button> : null
                }
                {
                    activePage !== 1 && activePage !== totalPages ? <Button
                        _hover={{ bg: '#8b0000', color: 'white' }}
                        background={activePage !== totalPages && activePage !== 1 ? '#8b0000' : '#19c37d'}
                        color={activePage !== totalPages && activePage !== 1 ? 'white' : 'white'} size="sm" disabled={true}>
                        {activePage}
                    </Button> : null
                }

                {
                    activePage < totalPages - 1 ?
                        <Button
                            _hover={{ bg: '#137754', color: 'white' }}
                            onClick={() => navigate(`/${activePage + 1}`)}
                            background="#19c37d" color={'white'} size="sm" disabled={true}>
                            {activePage + 1}
                        </Button> : null
                }
                {
                    activePage < totalPages - 2 ? <Button background="#19c37d" color={'white'} size="sm" disabled={true}>
                        {"..."}
                    </Button> : null
                }
                <Button
                    _hover={{ bg: '#137754', color: 'white' }}
                    onClick={() => navigate(`/${totalPages}`)}
                    background={activePage === totalPages ? '#8b0000' : '#19c37d'}
                    color={activePage === totalPages ? 'white' : 'white'} size="sm" disabled={true}>
                    {totalPages}
                </Button>
                {
                    activePage < totalPages ? <Button
                        _hover={{ bg: '#137754', color: 'white' }}
                        onClick={() => nextButtonHandler(activePage)}
                        background="#19c37d"
                        color={'white'} size="sm">
                        Next
                    </Button> : null
                }

            </HStack>
        </div>
    );
};

export default Pagination;
