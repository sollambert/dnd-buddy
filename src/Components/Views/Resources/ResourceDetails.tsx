import React from "react";

type Props = {
  details: Details;
};

type Details = { [key: string]: any };

function ResourceDetails({ details }: Props): JSX.Element {
  console.log(details);
  return (
    <>
      <table style={{border: "1px solid #000000", borderCollapse:"collapse"}}>
        <tbody>
          {Object.keys(details).map((detail, i) => {
            return (
              <tr key={i}>
                <td style={{border: "1px solid #000000"}}>{typeof detail != 'number' ? detail: ''}</td>
                <td style={{border: "1px solid #000000"}}>
                  {typeof details[detail] == "object"
                    ? <ResourceDetails details={details[detail]}/>
                    : JSON.stringify(details[detail])}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ResourceDetails;
