import React, { useState, useEffect } from "react";

export const useFilter = (data, query) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (query.length) {
      setFilteredData(
        data.filter((animal) =>
          animal?.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredData(data);
    }
  }, [data, query]);

  return filteredData;
};
