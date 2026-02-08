// src/Components/ProtectedSection.jsx
import React from "react";

const ProtectedSection = ({ canNavigate, onRestrictedClick, children }) => {
  if (!canNavigate) {
    onRestrictedClick?.(); // trigger alert
    return null; // hide content
  }
  return <>{children}</>;
};

export default ProtectedSection;
