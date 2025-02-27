import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCategories } from "../../api/api_calls";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

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
    <Card className="p-4">
      <div className="flex flex-row justify-between items-center gap-4 w-full">
        <Select
          onValueChange={(value) =>
            navigate(
              value !== "all" ? `/products/category/${value}` : "/products"
            )
          }
        >
          <SelectTrigger className="w-48">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          type="number"
          placeholder="Limit"
          min={1}
          value={limit}
          className="w-32"
          onChange={(e) => setLimit(e.target.value)}
          onBlur={() =>
            navigate(
              Number(limit) > 0 ? `/products/limit/${limit}` : "/products"
            )
          }
        />
        <Select
          onValueChange={(value) => {
            setSortOrder(value);
            navigate(`/products/sort/${value}`);
          }}
        >
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Sort Order" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asc">ID: Low to High</SelectItem>
            <SelectItem value="desc">ID: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </Card>
  );
};

export default FilterBar;
