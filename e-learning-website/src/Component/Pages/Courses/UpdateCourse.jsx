import { useState, useEffect } from "react";
import "./AddCourse.css";
import { useParams, useNavigate } from "react-router-dom";

export const UpdateCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    url: "",
    title: "",
    description: "",
    instructor: "",
    price: "",
  });

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`http://localhost:3800/course/getCourse/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch course");
        }
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error("Error fetching course:", error);
        alert("Error fetching course. Please try again later.");
      }
    };

    fetchCourse();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3800/course/updateCourse/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to update course");
      }
      alert("Course updated successfully!");
      navigate("/courses");
    } catch (error) {
      console.error("Error updating course:", error);
      alert("Error updating course. Please try again later.");
    }
  };

  return (
    <div className="add-course-container" style={{ marginTop: "3rem" }}>
      <h2>Update Course</h2>
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
        <button type="submit" className="submit-btn">
          Update
        </button>
      </form>
    </div>
  );
};
