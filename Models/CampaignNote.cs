namespace dnd_buddy.Models;

public class CampaignNote
{
    public int Id {get; set;}
    public int CampaignId {get; set;}
    public string Note {get; set;}

    public CampaignNote (int Id, int CampaignId, string Note) {
        this.Id = Id;
        this.CampaignId = CampaignId;
        this.Note = Note;
    }
}