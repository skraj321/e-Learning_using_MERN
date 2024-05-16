import { useState } from "react";
import "./AddCourse.css";
import { useNavigate } from "react-router-dom";

export const AddCourse = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    url: "",
    title: "",
    description: "",
    instructor: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3800/course/addCourse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to add course");
      }
      alert("Course added successfully!");
      const data = await response.json();
      console.log(data);
      if (data.msg == "saved") {
        navigate("/course");
      }
    } catch (error) {
      console.error("Error adding course:", error);
      alert("Error adding course. Please try again later.");
    }
  };

  return (
    <div className="addpage">
    <div className="add-course-container" style={{ marginTop: "3rem" }}>
      <h2>Add Course</h2>
      <form onSubmit={handleSubmit} className="add-course-form">
        <label htmlFor="url">url:</label>
        <input
          type="text"
          id="url"
          name="url"
          className="inputs"
          value={formData.url}
          onChange={handleChange}
        />

        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          className="inputs"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="description">Descriptions:</label>
        <textarea
          id="description"
          name="description"
          className="inputs"
          value={formData.description}
          onChange={handleChange}
        />

        <label htmlFor="instructor">Instructor:</label>
        <input
          type="text"
          id="instructor"
          name="instructor"
          className="inputs"
          value={formData.instructor}
          onChange={handleChange}
        />
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          className="inputs"
          value={formData.price}
          onChange={handleChange}
        />
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          className="inputs"
          value={formData.rating}
          onChange={handleChange}
        />

        <label htmlFor="duration">Duration:</label>
        <input
          type="number"
          id="duration"
          name="duration"
          className="inputs"
          value={formData.duration}
          onChange={handleChange}
        />

        <label htmlFor="videoUrl">Video URL:</label>
        <input
          type="text"
          id="videoUrl"
          name="videoUrl"
          className="inputs"
          value={formData.videoUrl}
          onChange={handleChange}
        />

        <label htmlFor="briefDes">Brief Description:</label>
        <input
          type="text"
          id="briefDes"
          name="briefDes"
          className="inputs"
          value={formData.briefDes}
          onChange={handleChange}
        />


        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};
