import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Redux/store.ts";
import { getCampaigns } from "../../../Redux/ActionCreators/campaign.action.creators";


function Campaigns(): JSX.Element {
  const dispatch = useDispatch();
  const campaigns = useSelector((store: RootState) => store.campaignsReducer);

  useEffect(() => {
    dispatch(getCampaigns());
  }, [dispatch])

  return (<>
    {JSON.stringify(campaigns)}
  </>);
}

export default Campaigns;
