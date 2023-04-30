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
      <div onClick={() => {
        history.push(result.url.replace('/api/', '/resources/'))
      }}>{result.name}</div>
    </>
  );
}

export default ResourceItem;
