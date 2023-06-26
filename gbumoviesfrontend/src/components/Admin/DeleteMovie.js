import { Button, Container, HStack } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getMovies } from '../../redux/actions/movie'
import Pagination from 'react-js-pagination';
import DeleteSearch from '../DeleteSearch/DeleteSearch'
import DeleteCard from './DeleteCard'
import NotFound from '../NotFound/NotFound'
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader'





const DeleteMovie = () => {


    const dispatch = useDispatch();
    const { keyword } = useParams();

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(getMovies(keyword, currentPage));
    }, [dispatch, keyword, currentPage])

    const { movies, filteredMoviesCount, resultPerPage, loading } = useSelector(state => state.movie);


    const setCurrentPageNo = (e) => {
        setCurrentPage(e);
    }



    return (
        <Container color={'white'} maxW={["100vw", '80vw']} display={'flex'} flexDirection={"column"} justifyContent={'center'} alignItems={'center'}>
            <h1 style={{ fontSize: "40px", fontWeight: 'bold', fontFamily: " 'Stylish', sans-serif", padding: "1rem", width: "19rem", borderBottom: "3px solid #19c37d", color: "#19c37d" }}>DELETE MOVIE </h1>

            <Link to={`/`}>
                <Button position={"absolute"} top={["7rem", '2rem']} left={["40%", '18rem']} background={"#19c37d"} color={'white'} >Home</Button>
            </Link>

            <Box color={'#19c37d'} display={'flex'} flexDirection={'column'} alignItems={"center"} m={['4rem', '5rem']}>
                <DeleteSearch />
                <HStack justifyContent={'center'} flexWrap={'wrap'} mt={'2rem'} w={['95vw', '80vw']} alignItems={'center'}>
                    {loading ? <Loader /> :
                        filteredMoviesCount === 0 ? (
                            <NotFound />
                        ) : (
                            movies.map((movie) => (
                                <Box m={'2rem'} p={'1rem'} border={'2px solid #1c865c'} borderRadius={'10px'} maxW={['100%', '40rem']} >
                                    <DeleteCard key={movie._id} movie={movie} keyword={keyword} currentPage={currentPage} />
                                </Box>
                            ))
                        )}
                </HStack>
            </Box>
            {
                resultPerPage < filteredMoviesCount && (
                    <div className="paginationBox" >
                        <Pagination
                            activePage={currentPage}
                            itemsCountPerPage={resultPerPage}
                            totalItemsCount={filteredMoviesCount}
                            onChange={setCurrentPageNo}
                            nextPageText={'Next'}
                            prevPageText={'Previous'}
                            firstPageText={"1st"}
                            lastPageText={'Last'}
                            itemClass="page-item"
                            linkClass='page-link'
                            activeClass='pageItemActive'
                            activeLinkClass='pageLinkActive'
                        />
                    </div>
                )
            }
            <Footer />
        </Container >
    )
}

export default DeleteMovie
