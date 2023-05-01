import React from "react";
import { ApiResult } from "./Resources";
import { useHistory } from "react-router-dom";

type Props = {
  result: ApiResult;
};

function ResourceItem({ result }: Props): JSX.Element {
  const history = useHistory();

  return (
    <>
      <div className="resource-redirect" style={{ border: "1px solid #000000", padding: ".25em" }} onAuxClick={(e) => {
        if (e.button === 1) {
          window.open(result.url.replace('/api/', '/resources/'));
        }
      }}
        onClick={() => {
          history.push(result.url.replace('/api/', '/resources/'));
        }}>{result.name}</div>
    </>
  );
}

export default ResourceItem;
