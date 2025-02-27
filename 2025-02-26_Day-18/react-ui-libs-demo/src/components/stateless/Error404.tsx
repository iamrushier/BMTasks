import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

const Error404 = () => {
  return (
    <div className="flex justify-center items-center h-[70vh]">
      <Card className="p-6 text-center">
        <h1 className="text-2xl font-bold text-red-500">
          This page doesn't exist
        </h1>

        <Link to="/">Back Home</Link>
      </Card>
    </div>
  );
};

export default Error404;
