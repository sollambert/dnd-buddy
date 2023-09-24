import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store.ts";
import { getCampaignInfo } from "../../Redux/ActionCreators/campaign.action.creators";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Campaigns(): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const campaigns = useSelector((store: RootState) => store.campaignInfoReducer);

  useEffect(() => {
    dispatch(getCampaignInfo());
  }, [dispatch])

  return (<>
    {campaigns.map((campaign) => {
      return (
        <div key={campaign.id}>
          <Link className="text-5xl" to={`${campaign.id}`}>{campaign.name}</Link>
        </div>)
    })}
  </>);
}

export default Campaigns;
