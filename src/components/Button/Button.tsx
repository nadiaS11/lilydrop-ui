import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: "black",
        color: "whitesmoke",
        borderRadius: "10px 10px 10px 10px",
        height: "36px",
        width: "60px",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
