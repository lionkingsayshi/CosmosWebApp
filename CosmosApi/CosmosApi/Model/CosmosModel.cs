namespace CosmosAPI.Models
{
    public class Node
    {
        public string Id { get; set; }
        public string Group { get; set; }
        public string Parent { get; set; }
    }

    public class Link
    {
        public string Source { get; set; }
        public string Target { get; set; }
    }

    public class CosmosData
    {
        public List<Node> Nodes { get; set; }
        public List<Link> Links { get; set; }
    }
}
