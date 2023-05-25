import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store.ts";
import { getCampaignInfo } from "../../Redux/ActionCreators/campaign.action.creators";
import { useHistory } from "react-router-dom";


function Campaigns(): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();
  const campaigns = useSelector((store: RootState) => store.campaignInfoReducer);

  useEffect(() => {
    dispatch(getCampaignInfo());
  }, [dispatch])

  return (<>
    {campaigns.map((campaign) => {
      return (
        <div key={campaign.id} onClick={() => {
          history.push(`campaigns/${campaign.id}`)
        }}>
          {`${campaign.id} ${campaign.name}`}
        </div>)
    })}
  </>);
}

export default Campaigns;
