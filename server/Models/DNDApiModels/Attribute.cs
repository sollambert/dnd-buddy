using System.Collections.Generic;
public class Attribute
{
    public string index { get; set; }
    public string name { get; set; }
    public string full_name { get; set; }
    public List<string> desc { get; set; }
    public List<Skill> skills { get; set; }
    public string url { get; set; }
}

public class Skill
{
    public string name { get; set; }
    public string index { get; set; }
    public string url { get; set; }
}
