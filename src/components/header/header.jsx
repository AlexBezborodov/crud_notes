import React from "react";

import { Layout, Input } from "antd";
import PropTypes from "prop-types";

export const Header = ({ query, setQuery }) => {
  const { Header } = Layout;

  const onSearch = (e) => {
    setQuery(e.target.value);
  };
  return (
    <Header
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Input.Search
        value={query || ""}
        placeholder="input search text"
        onChange={onSearch}
        style={{ maxWidth: 550 }}
      />
    </Header>
  );
};

Header.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func.isRequired,
};
