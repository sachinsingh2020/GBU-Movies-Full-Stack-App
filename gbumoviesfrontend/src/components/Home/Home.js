import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Box, Container } from '@chakra-ui/react';
import MovieCard from '../MovieCard/MovieCard';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../redux/actions/movie';
import { useParams } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import NotFound from '../NotFound/NotFound';



const Home = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { keyword } = useParams();

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getMovies(keyword, currentPage));
  }, [dispatch, keyword, currentPage])

  const { movies, filteredMoviesCount, resultPerPage, loading } = useSelector(state => state.movie);
  // if (!movies || filteredMoviesCount || resultPerPage) return null;

  // let count = filteredMoviesCount;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  }

  const movieClickHandler = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <Container maxW={['100vw', '80vw']}>
      <Navbar />
      <Box display={'flex'} justifyContent={'space-evenly'} flexWrap={'wrap'} >
        {loading ? <Loader /> :
          filteredMoviesCount === 0 ?
            <NotFound /> : movies && movies.map((movieData, index) => (
              <Link to={`/movie/${movieData._id}`} key={index}>
                <MovieCard
                  key={index}
                  movieData={movieData}
                  onClick={() => movieClickHandler(index)}
                />
              </Link>
            ))}
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
    </Container>
  );
};

export default Home;
