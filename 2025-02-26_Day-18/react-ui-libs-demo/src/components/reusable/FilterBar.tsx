import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCategories } from "../../api/api_calls";

const FilterBar = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [limit, setLimit] = useState<string>("");
  const [, setSortOrder] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="border p-2 bg-light rounded d-flex justify-content-around align-items-center">
      <select
        className="form-select w-auto"
        onChange={(e) => {
          if (e.target.value) navigate(`/products/category/${e.target.value}`);
          else navigate(`/products`);
        }}
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>

      <input
        type="number"
        className="form-control w-auto"
        placeholder="Limit"
        min={1}
        value={limit}
        onChange={(e) => setLimit(e.target.value)}
        onBlur={() => {
          if (Number(limit) > 0) navigate(`/products/limit/${limit}`);
          else navigate(`/products`);
        }}
      />

      <select
        className="form-select w-auto"
        onChange={(e) => {
          setSortOrder(e.target.value);
          if (e.target.value) navigate(`/products/sort/${e.target.value}`);
        }}
      >
        <option value="asc">ID: Low to High</option>
        <option value="desc">ID: High to Low</option>
      </select>
    </div>
  );
};

export default FilterBar;
