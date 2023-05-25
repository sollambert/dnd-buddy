import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../../Redux/store.ts";
import { getCampaign } from "../../../Redux/ActionCreators/campaign.action.creators";

type Props = {
};

type Params = {
    id: string;
};

function CampaignDetails({
}: Props): JSX.Element {
    const params: Params = useParams();
    const dispatch = useDispatch();
    const campaignDetails = useSelector((store: RootState) => store.campaignReducer);

    useEffect(() => {
        dispatch(getCampaign(Number(params.id)));
    }, []);

    return (
        <>
            {JSON.stringify(campaignDetails)}
            <h1>{campaignDetails.name}</h1>
            <h2>{campaignDetails.description}</h2>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <h3>Characters:</h3>
                <div>
                    {campaignDetails.characters.map((character) => {
                        return character.name
                    })}
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <h3>Notes:</h3>
                <div>
                    {campaignDetails.notes.map((note) => {
                        return note
                    })}
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <h3>Encounters:</h3>
                <div>
                    {campaignDetails.encounters.map((encounter) => {
                        return (<div key={encounter.id}>
                            {JSON.stringify(encounter)}
                        </div>)
                    })}
                </div>
            </div>
        </>);
}

export default CampaignDetails;
