import React from "react";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import ResourceLink from "./ResourceLink";
import ResourceItem from "./ResourceItem";
import ResourceDetails from "./ResourceDetails";

type Props = {};

type Params = {
  endpoint?: string;
  index?: string;
};

type ApiResponse = {
  results: Array<ApiResult>;
};

type ApiResult = {
  index: string;
  name: string;
  url: string;
};

function Resources({}: Props): JSX.Element {
  const [result, setResult] = useState<ApiResponse | undefined>({
    results: [],
  });
  const [details, setDetails] = useState({});

  const params: Params = useParams();

  useEffect(() => {
    if (params.endpoint != undefined && params.index != undefined) {
      axios
        .get(`/srdapi/${params.endpoint}/${params.index}`)
        .then((response) => {
          setDetails(response.data);
          setResult(undefined)
        })
        .catch((err) => {
          console.error(err);
        });
    } else if (params.endpoint != undefined) {
      axios
        .get(`/srdapi/${params.endpoint}`)
        .then((response) => {
          setResult(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [params]);

  console.log(result);

  return (
    <>
      {params.endpoint == undefined ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          <ResourceLink path="spells" />
          <ResourceLink path="races" />
          <ResourceLink path="monsters" />
          <ResourceLink path="ability-scores" label="ABILITIES" />
          <ResourceLink path="classes" />
          <ResourceLink path="alignments" />
          <ResourceLink path="backgrounds" />
          <ResourceLink path="traits" />
          <ResourceLink path="feats" />
          <ResourceLink path="languages" />
          <ResourceLink path="proficiencies" />
          <ResourceLink path="spells" />
        </div>
      ) : (
        <>
          {result?.results
            ? result.results.map((result, i) => {
                return <ResourceItem result={result} key={i} />;
              })
            : 
            <ResourceDetails details={details}/>}
        </>
      )}
    </>
  );
}

export default Resources;

export type { ApiResult };
