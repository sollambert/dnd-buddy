import React from "react";
import { useHistory } from "react-router-dom";

type Props = {
  details: Details;
};

type Details = { [key: string]: any };

function ResourceDetails({ details }: Props): JSX.Element {
    const history = useHistory();
  return (
    <>
      <div
        style={{
          border: "1px solid #000000",
          borderCollapse: "collapse",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {Object.keys(details).map((detail, i) => {
          return (
            <>
              {details[detail] ? (
                <div key={i} style={{ display: "flex", flexDirection: "row" }}>
                  {Array.isArray(details) ? (
                    ""
                  ) : (
                    <div
                      style={{ border: "1px solid #000000", padding: ".25em" }}
                    >
                      {detail}
                    </div>
                  )}
                  <div
                    style={{ border: "1px solid #000000", padding: ".25em" }}
                  >
                    {typeof details[detail] == "object" ? (
                      <ResourceDetails details={details[detail]} />
                    ) : (
                        <>
                        {detail=="url"?
                        <div onClick={()=>{
                            history.push(details[detail].replace('/api/', '/resources/'))
                        }}>
                        {details[detail]}</div>
                        :
                        details[detail]}
                        </>
                    )}
                  </div>
                </div>
              ) : (
                ""
              )}
            </>
          );
        })}
      </div>
    </>
  );
}

export default ResourceDetails;
