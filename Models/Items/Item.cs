using System.ComponentModel;

abstract class Item {
    public float Weight {get; set;} = 0.0F;
    public int Value {get; set;} = 0;
    public string Name {get; set;} = "";
    public string? Description {get; set;} = "";
}