import React, {useEffect} from "react";
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
    </>);
}

export default CampaignDetails;
