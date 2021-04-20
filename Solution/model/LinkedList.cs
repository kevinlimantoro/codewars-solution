namespace Solution
{
    public class DoubleNode
    {
        public Node prev;
        public int data;
        public Node next;

        // Function to create newNode
        // in a linkedlist
        public DoubleNode(int key)
        {
            prev = null;
            data = key;
            next = null;
        }
    }
}