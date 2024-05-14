import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/Signin';
import About from './Pages/About';
import Search from './Pages/Search';
import Listing from './Pages/Listing';
import Confidential from './component/Confidential';
import CreateListing from './Pages/CreateListing';
import UpdateListing from './Pages/UpdateListing';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import Header from './component/Header';



export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/about' element={<About />} />
        <Route path='/search' element={<Search />} />
        <Route path='/listing/:listingId' element={<Listing />} />

        <Route element={<Confidential />}>
          <Route path='/profile' element={<Profile/>} />
          <Route path='/create-listing' element={<CreateListing />} />
          <Route
            path='/update-listing/:listingId'
            element={<UpdateListing/>}
          />
        </Route>
      </Routes>
      </>

  );
}