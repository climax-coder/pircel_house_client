import React, { useState } from "react";

interface TraitsFilterProps {
  onFilterChange: (filterTerm: string) => void;
}

const styles = {
  form_input: {
    color: "#333",
    fontSize: "1.2rem",
    padding: "1rem 1rem",
    borderRadius: "0.3rem",
    backgroundColor: "rgb(255, 255, 255)",
    width: "60%",
    display: "block",
    transition: "all 0.3s",
  },
};

const TraitsFilter: React.FC<TraitsFilterProps> = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChande = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onFilterChange(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search houses"
      value={searchTerm}
      onChange={handleInputChande}
      style={styles.form_input}
    />
  );
};

export default TraitsFilter;
