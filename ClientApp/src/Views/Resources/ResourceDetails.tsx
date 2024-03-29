import React from "react";
import { useNavigate } from "react-router-dom";
import ResourceItem from "./ResourceItem";
import ResourceLink from "./ResourceLink";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  details: Details;
  direction?: any;
  changeTitle?: boolean | undefined
  searchBar?: boolean | undefined;
};

type Details = { [key: string]: any };

function ResourceDetails({ details, direction, changeTitle, searchBar }: Props): JSX.Element {
  // Init navigate hook
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Update page title to reflect current object user is looking at
    if (changeTitle && details?.name) {
      document.title = details.name;
      return () => {
        document.title = 'D&D Buddy';
      }
    }
    return () => {
      setSearch('');
    }
  }, [details, changeTitle])

  // console.log(details)
  return (
    <>
      {/* Display search bar if enabled through props */}
      {searchBar ?
        <input
          style={{ width: "20vw", height: "2em" }}
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => { setSearch(e.target.value) }} /> : ''}
      <div
        style={{
          border: "1px solid #000000",
          borderCollapse: "collapse",
          display: "flex",
          flexDirection: direction ? direction : 'column',
          flexWrap: 'wrap'
        }}
      >
        {/* Add image if it exists */}
        {details.image ? <img style={{ width: "20vw" }} src={`https://www.dnd5eapi.co${details.image}`} alt="" /> : ''}
        {/* Iterate through details object and display the inner content */}
        {Object.keys(details).map((detail, i) => {
          if (detail === "option_set_type"
          || detail === "option_type") {
            return;
          }
          // Display further details if search is empty or detail is included within search
          if (search === '' || detail.includes(search)) {
            // Filter keys that need to be displayed as links
            if (detail === 'spells') {
              return <ResourceLink key={i} label="SPELLS" path={details[detail].replace('/api/', '')} />
            } else if (detail === 'class_levels') {
              return <ResourceLink key={i} label="CLASS-LEVELS" path={details[detail].replace('/api/', '')} />
            }
            // Display value of current key if it does not match a key that does not need to be displayed
            else if (detail !== 'url') {
              return (
                <div key={i}>
                  {details[detail]
                  && (details[detail].length === undefined
                    || details[detail].length !== 0) ? (
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      {/* Prevent array index from displaying */}
                      {Array.isArray(details) ? (
                        ""
                      ) : (
                        // Display current key
                        <div
                          style={{ border: "1px solid #000000", padding: ".25em" }}
                        >
                          {detail}
                        </div>
                      )}
                      <div
                        style={{ border: "1px solid #000000", padding: ".25em" }}
                      >
                        {/* Determine if current value is an object to continue recursion or exit recursive component calls */}
                        {typeof details[detail] === "object" ? (
                          <>
                            {/* Check if key and value should be displayed as ResourceItem component or as recursive ResourceDetails component */}
                            {Object.keys(details[detail]).length === 3
                              && details[detail].name
                              && details[detail].url ? <ResourceItem result={details[detail]} /> :
                              <ResourceDetails details={details[detail]} direction={
                                // Determine which keys to display inline
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
                            {detail === "url" || detail === "resource_list_url" ?
                              <Link to={details[detail].replace('/api/', '/resources/')}>
                                {details[detail]}
                              </Link>
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
              )

            }
          } return null
        })}
      </div>
    </>
  );
}

export default ResourceDetails;
