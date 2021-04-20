using System;
using System.Linq;

namespace Solution
{
    public class LRNode
    {
        public int Val;
        public LRNode Left;
        public LRNode Right;

        public static void PrintTraversal(LRNode root)
        {
            if (root == null)
                return;
            Console.WriteLine(root.Val);
            PrintTraversal(root.Left);
            PrintTraversal(root.Right);
        }
    }

    public class CountTheGoodNodes
    {
        public static int Process(LRNode Head, int max = 0)
        {
            var goodNode = 0;
            if (Head == null)
                return 0;
            if (Head.Val >= max)
            {
                goodNode = 1;
                max = Head.Val;
            }
            return goodNode +
                Process(Head.Left, max) +
                Process(Head.Right, max);
        }

        public static string ProcessString(LRNode Head, int max = 0)
        {
            var goodNode = "";
            if (Head == null)
                return null;
            if (Head.Val >= max)
            {
                goodNode = Head.Val.ToString();
                max = Head.Val;
            }
            return string.Join(",", new string[] { goodNode, ProcessString(Head.Left, max), ProcessString(Head.Right, max) }.Where(x => !string.IsNullOrWhiteSpace(x)));
        }
    }
}
