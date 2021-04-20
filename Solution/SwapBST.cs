namespace Solution
{
    public class SwapBST
    {
        public static void Process(LRNode head)
        {
            ProcessSwapping(head.Left, head.Right);
        }

        public static void ProcessSwapping(LRNode left, LRNode right)
        {
            if (left != null && right != null)
            {
                int temp = right.Val;
                right.Val = left.Val;
                left.Val = temp;
            }
            else if (left == null && right == null)
                return;

            ProcessSwapping(left.Left, right.Left);
            ProcessSwapping(left.Right, right.Right);
        }
    }
}
