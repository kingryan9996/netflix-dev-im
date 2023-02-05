import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector } from "react-redux";

const LoadingSpiner = () => {
  const { loading } = useSelector((state) => state.movie);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  return (
    <div style={{ height: "100vh" }}>
      <ClipLoader
        color="#ffffff"
        loading={loading}
        cssOverride={override}
        size={350}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingSpiner;
