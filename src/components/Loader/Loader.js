import React from "react";
import { DotLoader } from "react-spinners";
import PropType from "prop-types";

const Loader = ({ loading }) => {
  return (
    <div className="flex items-center justify-center h-1/2 ">
      <DotLoader color="#2563eb" size={100} loading={loading} />
    </div>
  );
};

Loader.propTypes = {
  loading: PropType.bool,
};

Loader.defaultProps = {
  loading: false,
};

export default Loader;
