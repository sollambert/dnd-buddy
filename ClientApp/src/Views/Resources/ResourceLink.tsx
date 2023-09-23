import React from "react";
import { useNavigate } from "react-router-dom";
import './Resources.css';

type Props = {
  path: string;
  label?: string;
};

function ResourceLink({path, label}: Props): JSX.Element {
  const navigate = useNavigate();
  return (
    <>
      <div className="resource-button"
          onClick={() => {
            navigate(`/resources/${path}`, {replace: true});
          }}
        >
            {label ? label: path.toUpperCase()}
      </div>
    </>
  );
}

export default ResourceLink;
