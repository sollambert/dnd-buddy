import Campaign from '../../Classes/Campaign/Campaign'
import axios from "axios";

interface campaignResponse {
    campaign: Campaign;
}

interface deleteResponse {
    payload: number;
}

interface campaignsResponse {
    campaigns: Array<Campaign>;
}

export async function postCampaign(
    payload: Campaign
) : Promise<campaignResponse> {
    // console.log(payload);
    return await axios.post('/api/campaign', payload)
}

export async function getCampaigns() : Promise<campaignsResponse> {
    return await axios.get('/api/campaign');
}

export async function deleteCampaign(
    payload: number
) : Promise<deleteResponse> {
    return await axios.delete(`/api/campaign/${payload}`);
}