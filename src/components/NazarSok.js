import React from "react";
import Body from "./Body";

const NazarSok = (OriginalComponent) => {
  // A Higher-Order Component (HOC) that adds additional functionality
  return (props) => {
    // You can modify or pass additional props here if needed
    const additionalStyles = {
      backgroundColor: "#f0f8ff", // Light blue background for differentiation
    };

    return (
      <div style={additionalStyles}>
        <OriginalComponent {...props} />
      </div>
    );
  };
};

// Use the HOC with the Body component
const EnhancedBody = NazarSok(Body);

export default EnhancedBody;
