import React from "react";
import PropTypes from "prop-types";

const Input = ({
  title,
  type,
  placeholder,
  isRequired,
  id,
  htmlFor,
  value,
}) => {
  return (
    <div
      className={`flex justify-between mt-4 mb-2 ${
        type === "radio" ? "w-1/2" : ""
      }`}
    >
      <label htmlFor={htmlFor} className="text-lg font-medium">
        {title}
      </label>
      <input
        type={type}
        id={id}
        className="w-2/3 p-2 border-2 border-gray-800 rounded"
        placeholder={placeholder}
        required={isRequired}
        minLength={type === "password" ? 8 : null}
        defaultValue={value}
      />
    </div>
  );
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
Input.defaultProps = {
  value: "",
};

export default Input;
