import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type Props = {
  path: string;
  label?: string;
};

function ResourceLink({path, label}: Props): JSX.Element {
  const navigate = useNavigate();
  return (
    <>
      <Link className="btn-link" to={`/resources/${path}`}>
            {label ? label: path.toUpperCase()}
      </Link>
    </>
  );
}

export default ResourceLink;
