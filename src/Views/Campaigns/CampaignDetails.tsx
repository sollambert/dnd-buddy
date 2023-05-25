import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { RootState } from "../../Redux/store.ts";
import { addCampaignNote, getCampaign } from "../../Redux/ActionCreators/campaign.action.creators";
import BackButton from "../../Components/Buttons/BackButton.tsx";

type Props = {
};

type Params = {
    id: string;
};

function CampaignDetails({
}: Props): JSX.Element {
    const params: Params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const [note, setNote] = useState("");
    const campaignDetails = useSelector((store: RootState) => store.campaignReducer);

    useEffect(() => {
        dispatch(getCampaign(Number(params.id)));
    }, []);

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <BackButton/>
            {JSON.stringify(campaignDetails)}
            <h1>{campaignDetails.name}</h1>
            <h2>{campaignDetails.description}</h2>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <h3>Characters:</h3>
                <ul style={{ listStyle: "none" }}>
                    {campaignDetails.characters.map((character) => {
                        return (
                            <li key={character.id} onClick={() => {
                                history.push(`/characters/${character.id}`);
                            }} style={{ textAlign: "left", border: "1px solid black" }}>
                                {character.name}
                            </li>)
                    })}
                </ul>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <h3>Notes:</h3>
                <textarea
                onChange={(e) => {
                    setNote(e.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                        dispatch(addCampaignNote({
                            id: campaignDetails.id,
                            note}, () => {
                                setNote("");
                            }));
                    }
                }}
                value={note}
                placeholder={"Enter new note..."}
                style={{width: "100%"}}/>
                <ul style={{ listStyle: "none" }}>
                    {campaignDetails.notes.map((note) => {
                        return <li style={{ textAlign: "left", border: "1px solid black" }}>{note}</li>
                    })}
                </ul>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <h3>Encounters:</h3>
                <ul style={{ listStyle: "none" }}>
                    {campaignDetails.encounters.map((encounter) => {
                        return (
                            <li key={encounter.id} onClick={() => {
                                history.push(`/encounters/${encounter.id}`);
                            }} style={{ textAlign: "left", border: "1px solid black" }}>
                                <div>
                                    {encounter.name}
                                </div>
                                <div>
                                    {encounter.description}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>);
}

export default CampaignDetails;
