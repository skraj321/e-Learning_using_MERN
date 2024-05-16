// AdminPage.jsx

import { React, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import AddCourse from "./AddCourse";
import UpdateCourse from "./UpdateCourse";
import { useNavigate } from "react-router-dom";
import "./AdminPage.css";
import CoursesForA from "./CoursesForA";
import { Users } from "./Users";

export const AdminPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      localStorage.getItem("role") == null ||
      localStorage.getItem("role") == 0
    ) {
      navigate("/");
    }
  }, [navigate]);

  if (
    localStorage.getItem("role") !== null &&
    localStorage.getItem("role") == 0
  ) {
    navigate("/");
  } else {
    return (
      <div className="adminpage">
        <div className="adminContain">
          <h1 className="adm">Welcome to Admin Panel</h1>
          <nav>
            <ul className="admin-p">
              <li>
                <Link to="/admin/addcourse">Add Course</Link>
              </li>

              <li>
                <Link to="/admin/courses">Courses</Link>
              </li>
              <li>
                <Link to="/admin/users">Users</Link>
              </li>
              <li>
                <Link to="/admin/ordered">Ordered</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/admin/addcourse" element={<AddCourse />} />

            <Route path="/admin/courses" element={<CoursesForA />} />
            <Route path="/admin/users" element={<Users />} />
          </Routes>
        </div>
      </div>
    );
  }
};
