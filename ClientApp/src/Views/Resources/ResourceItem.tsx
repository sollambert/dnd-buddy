import React from "react";
import { ApiResult } from "./Resources";
import { useNavigate } from "react-router-dom";

type Props = {
  result: ApiResult;
};

// Event handler for mouseDown events to handle url navigation
const handleMouseDown = (e: any, result: ApiResult, navigate?: any) => {
  if (e.button === 0) {
    // If ctrl key pressed, copy link to clipboard
    if (e.ctrlKey) {
      navigator.clipboard.writeText(result.url.replace('/api/', '/resources/'))
        .then(() => alert('Copied!'));
    } else {
      navigate(result.url.replace('/api/', '/resources/'), {replace: true});
    }
  }
  else if (e.button === 1) {
    window.open(result.url.replace('/api/', '/resources/'));
  }
}

function ResourceItem({ result }: Props): JSX.Element {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="resource-redirect"
        style={{ border: "1px solid #000000", padding: ".25em" }}
        onMouseDown={(e) => {
        handleMouseDown(e, result, navigate)
      }}>
        {result.name}
      </div>
    </div>
  );
}

export default ResourceItem;
