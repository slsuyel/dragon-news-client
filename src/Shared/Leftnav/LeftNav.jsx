import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h4>All category</h4>

      {categories.map((category) => (
        <p key={category.id}>
          <Link to={`/category/${category.id}`} className="fw-semibold text-dark text-decoration-none">{category.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftNav;
