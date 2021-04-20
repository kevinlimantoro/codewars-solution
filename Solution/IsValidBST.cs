namespace Solution
{
    public class IsValidBST
    {
        public enum Compare
        {
            LOW,
            HIGH
        }
        public static bool Process(LRNode head)
        {
            if (head == null)
                return true;

            return ProcessNodes(head.Left, Compare.LOW, head.Val) && ProcessNodes(head.Right, Compare.HIGH, head.Val);
        }

        public static bool ProcessNodes(LRNode child, Compare type, int max)
        {
            if (child == null)
                return true;

            if ((type == Compare.LOW && max > child.Val) || (type == Compare.HIGH && max < child.Val))
            {
                return ProcessNodes(child.Left, type, max) && ProcessNodes(child.Right, type, max);
            }

            return false;
        }
    }
}
