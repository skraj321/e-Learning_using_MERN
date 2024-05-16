import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Pages/Home/Home";
import About from "./Component/Pages/About/About";
import Courses from "./Component/Pages/Courses/Courses";
import Contact from "./Component/Pages/Contact/Contact";
import SignUp from "./Component/Pages/SignUp/SignUp";
import SignIn from "./Component/Pages/SignIn/SignIn";
import { Logout } from "./Component/Pages/Logout/Logout";
import { AddCourse } from "./Component/Pages/admin/AddCourse";
import CoursesForA from "./Component/Pages/admin/CoursesForA";
import { UpdateCourse } from "./Component/Pages/admin/UpdateCourse";
import {CourseDetails} from "./Component/Pages/Courses/CourseDetails";
import {AdminPage} from "./Component/Pages/admin/admin";
import { Dashboard } from "./Component/Pages/user/Dashboard";
import { PrivateRoute } from "./Component/Routes/Private";
import { CartPage } from "./Component/Pages/cart/CartPage";
import { Users } from "./Component/Pages/admin/Users";
import { Success } from "./Component/Pages/Success";
import { Cancel } from "./Component/Pages/Cancel";
import {Footer} from "./Component/Footer/Footer"
import UserProfile from "./Component/Pages/SignUp/UserProfile";
import Learning from "./Component/Pages/cart/Learning";
import { Ordered } from "./Component/Pages/admin/Ordered";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element= {<PrivateRoute/>}>
            <Route path="" element={<Dashboard />} />
           
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/learning" element={<Learning />} />
          
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/ordered" element={<Ordered />} />
          <Route path="/admin/addcourse" element={<AddCourse/>}/>
          <Route path="/admin/courses" element={<CoursesForA />} />
          <Route path="/admin/updatecourse/:id" element={<UpdateCourse />} />
          <Route path="/courses/:id" element={<CourseDetails/>}/>
          <Route path="/private" element={<CourseDetails/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route path="/cancel" element={<Cancel/>}/>
          
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
