import React from "react";
import { useHistory } from "react-router-dom";

type Props = {
  path: string;
  label?: string;
};

function ResourceLink({path, label}: Props): JSX.Element {
  const history = useHistory();
  return (
    <>
      <div className="nav-button"
          onClick={() => {
            history.push(`/resources/${path}`);
          }}
        >
            {label ? label: path.toUpperCase()}
      </div>
    </>
  );
}

export default ResourceLink;
