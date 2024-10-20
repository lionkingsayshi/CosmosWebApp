using System;

public class Galaxy
{
    public string Id { get; set; }
    public string Name { get; set; }
    public List<SolarSystem> SolarSystems { get; set; }
    public List<Star> Stars { get; set; }
    public List<BlackHole> BlackHoles { get; set; }
}
