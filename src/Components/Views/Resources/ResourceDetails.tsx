import React from "react";
import { useHistory } from "react-router-dom";
import ResourceItem from "./ResourceItem";

type Props = {
  details: Details;
  direction?: any;
  changeTitle?: boolean | undefined;
};

type Details = { [key: string]: any };

function ResourceDetails({ details, direction, changeTitle }: Props): JSX.Element {
  const history = useHistory();

  // useEffect(() => {
  //   if (changeTitle) {
  //     // console.log(details)
  //     document.title = details.name;
  //     return () => {
  //       document.title = 'DnD Buddy';
  //     }
  //   }
  // }, [details])
  console.log(details)
  return (
    <>
      <div
        style={{
          border: "1px solid #000000",
          borderCollapse: "collapse",
          display: "flex",
          flexDirection: direction ? direction : 'column',
          flexWrap: 'wrap'
        }}
      >
        {details.image ? <img style={{ width: "20vw" }} src={`https://www.dnd5eapi.co${details.image}`} alt="" /> : ''}
        {Object.keys(details).map((detail, i) => {
          return (
            <div key={i}>
              {details[detail] && (details[detail].length == undefined || details[detail].length != 0) ? (
                <div style={{ display: "flex", flexDirection: "row" }}>
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
                    {typeof details[detail] === "object" ? (
                      <>
                        {Object.keys(details[detail]).length === 3
                          // && details[detail].index
                          && details[detail].name
                          && details[detail].url ? <ResourceItem result={details[detail]} /> :
                          <ResourceDetails details={details[detail]} direction={
                            detail === 'options'
                              || detail === 'equipment'
                              || detail === 'proficiencies'
                              || detail === 'actions'
                              || detail === 'classes'
                              || detail === 'subclasses'
                              || detail === 'starting_proficiencies'
                              || detail === 'condition_immunities'
                              || detail === 'traits'
                              || detail === 'speed'
                              || detail === 'damage_resistances'
                              || detail === 'properties'
                              || detail === 'damage_at_slot_level'
                              || detail === 'damage_at_character_level'
                              || detail === 'saving_throws'
                              || detail === 'spells'
                              || detail === 'ability_bonuses'
                              || detail === 'languages'
                              || detail === 'results'
                              ? 'row' : undefined} />
                        }
                      </>
                    ) : (
                      <>
                        {detail === "url" ?
                          <div onAuxClick={(e) => {
                            if (e.button === 1) {
                              window.open(details[detail].replace('/api/', '/resources/'));
                            }
                          }}
                            onClick={() => {
                              history.push(details[detail].replace('/api/', '/resources/'));
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
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ResourceDetails;
