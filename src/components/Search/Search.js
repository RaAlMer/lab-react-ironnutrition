import { Divider, Input } from "antd";
import "./Search.css";

export function Search({ search, setSearchTerm, searchFood }) {
  const handleChange = (sear) => {
    searchFood(sear);
    setSearchTerm(sear);
  };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        value={search}
        type="search"
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Enter search query"
      />
    </>
  );
}
