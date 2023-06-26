import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import './App.css';
import AdminDashboard from './components/Admin/AdminDashboard';
import AdminLogin from './components/Admin/AdminLogin';
import ForgetPassword from './components/Admin/ForgetPassword';
import ResetPassword from './components/Admin/ResetPassword';
import CreateMovie from './components/Admin/CreateMovie';
import DeleteMovie from './components/Admin/DeleteMovie';
import MovieRequest from './components/MovieRequest/MovieRequest';
import { ProtectedRoute } from 'protected-route-react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';



function App() {
  const { isAuthenticated, error } = useSelector(state => state.user);
  // if (isAuthenticated) {
  //   console.log(isAuthenticated);
  // }
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }


  }, [dispatch, error]);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:keyword" element={<Home />} />
        <Route exact path="/movie/:id" element={<MovieDetails />} />
        <Route exact path="/adminlogin" element={<AdminLogin />} />
        <Route exact path="/forgetpassword" element={<ForgetPassword />} />
        <Route exact path="/resetpassword/:resetToken" element={<ResetPassword />} />
        <Route exact path='/admindashboard' element={
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            redirect="/adminlogin"
          >
            <AdminDashboard />
          </ProtectedRoute>} />
        <Route exact path='/createmovie' element={
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            redirect="/adminlogin"
          >
            <CreateMovie />
          </ProtectedRoute>} />
        <Route exact path='/deletemovie' element={
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            redirect="/adminlogin"
          >
            <DeleteMovie />
          </ProtectedRoute>} />
        <Route exact path='/deletemovie/:keyword' element={
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            redirect="/adminlogin"
          >
            <DeleteMovie />
          </ProtectedRoute>} />
        {/* <Route exact path="/createmovei" element={<CreateMovie />} />
        <Route exact path="/deletemovie" element={<DeleteMovie />} />
        <Route exact path="/admindashboard" element={<AdminDashboard />} /> */}
        <Route exact path='/movierequest' element={<MovieRequest />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
