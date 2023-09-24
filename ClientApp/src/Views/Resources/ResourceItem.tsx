import React from "react";
import { ApiResult } from "./Resources";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

type Props = {
  result: ApiResult;
};

function ResourceItem({ result }: Props): JSX.Element {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Link className="resource-redirect p-1 border bg-gray-300 rounded" to={result.url.replace('/api/', '/resources/')}>
        {result.name}
      </Link>
    </div>
  );
}

export default ResourceItem;
