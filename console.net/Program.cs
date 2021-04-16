using Solution;
using System;
using System.Collections.Generic;

namespace console.net
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            string str = "abbbcccd";

            // Stores length of str
            int N = str.Length;

            Console.WriteLine("----MinCntCharDeletionsFrequency----");
            Console.WriteLine(MinCntCharDeletionsFrequency.Process(
                str.ToCharArray(), N));


            Console.WriteLine("----MinSwapToPalindrome----");
            Console.WriteLine(MinSwapToPalindrome.Process(str));
            Console.WriteLine(MinSwapToPalindrome.Process("maadm"));
            Console.WriteLine(MinSwapToPalindrome.Process("raaccer"));
            Console.WriteLine(MinSwapToPalindrome.Process("rcarace"));
            Console.WriteLine("----MinStepsToMakePilesEqualHeight----");
            Console.WriteLine(MinStepsToMakePilesEqualHeight.Process(new int[] { 5, 2, 1, 1 }));
            Console.WriteLine(MinStepsToMakePilesEqualHeight.Process(new int[] { 5, 2, 1 }));
            Console.WriteLine(MinStepsToMakePilesEqualHeight.Process(new int[] { 5, 6, 5, 2, 4, 3, 4 }));
            Console.WriteLine("----LargestKSuchBothKAndMinusKExists----");
            Console.WriteLine(LargestKSuchBothKAndMinusKExists.Process(new int[] { 3, -3, 3, -1, 0 }));
            Console.WriteLine(LargestKSuchBothKAndMinusKExists.Process(new int[] { -5, -7, -2, 2, 1, 0 }));
            Console.WriteLine(LargestKSuchBothKAndMinusKExists.Process(new int[] { 7, 6, 5, -5, 1, 2, 4, -123 }));
            Console.WriteLine("----LongestUniqueConcatenateString----");
            Console.WriteLine(LongestUniqueConcatenateString.Process(new List<string>() { "un", "iq", "ue" }));
            Console.WriteLine(LongestUniqueConcatenateString.Process(new List<string>() { "abcdefghijklmnopqrstuvwxyz" }));
            Console.WriteLine(LongestUniqueConcatenateString.Process(new List<string>() { "interact" }));
            Console.WriteLine("----LongestUniqueConcatenateStringHumane----");
            Console.WriteLine(LongestUniqueConcatenateString.ProcessHumane(new List<string>() { "un", "iq", "ue" }));
            Console.WriteLine(LongestUniqueConcatenateString.ProcessHumane(new List<string>() { "abcdefghijklmnopqrstuvwxyz" }));
            Console.WriteLine(LongestUniqueConcatenateString.ProcessHumane(new List<string>() { "interact" }));
            Console.WriteLine("----LongestUniqueConcatenateStringArray----");
            Console.WriteLine(LongestUniqueConcatenateString.ProcessWithArray(new List<string>() { "un", "iq", "ue" }));
            Console.WriteLine(LongestUniqueConcatenateString.ProcessWithArray(new List<string>() { "abcdefghijklmnopqrstuvwxyz" }));
            Console.WriteLine(LongestUniqueConcatenateString.ProcessWithArray(new List<string>() { "interact" }));
            Console.WriteLine("----UniqueIntegerResulting0----");
            Array.ForEach(UniqueIntegerResulting0.Process(5), Console.Write);
            Console.WriteLine("");
            Array.ForEach(UniqueIntegerResulting0.Process(4), Console.Write);
            Console.WriteLine();
            Console.WriteLine("----JumpGame----");
            Console.WriteLine(JumpGame.Process(new int[] { 1, 2, 3, 4, 0, 1, 2, 51, 2, 3, 2 }, 9));
            Console.WriteLine(JumpGame.Process(new int[] { 1, 2, 3, 4, 2, 1, 2, 51, 2, 3, 2 }, 8));
            Console.WriteLine("----Reorder Link List----");
            Node head = new Node(1)
            {
                next = new Node(2)
                {
                    next = new Node(3)
                    {
                        next = new Node(4)
                        {
                            next = new Node(5)
                        }
                    }
                }
            };

            ReverseLinkedListSuchThat reverseLinkList = new ReverseLinkedListSuchThat();

            // Print original list
            reverseLinkList.printlist(head);

            // Modify the list
            reverseLinkList.rearrange(head);

            // Print modified list
            reverseLinkList.printlist(head);
            Console.WriteLine("----Insert 5 Largest----");
            Console.WriteLine(Insert5LargestNumber.Process(123));
            Console.WriteLine(Insert5LargestNumber.Process(675));
            Console.WriteLine(Insert5LargestNumber.Process(591));
            Console.WriteLine(Insert5LargestNumber.Process(2));
            Console.WriteLine(Insert5LargestNumber.Process(0));
            Console.WriteLine(Insert5LargestNumber.Process(230));
            Console.WriteLine("----Count Good Nodes----");
            LRNode LRHead = new LRNode()
            {
                Val = 3,
                Left = new LRNode() { Val = 1, Left = new LRNode() { Val = 3 } },
                Right = new LRNode() { Val = 4, Left = new LRNode() { Val = 1 }, Right = new LRNode() { Val = 5 } }
            };
            Console.WriteLine(CountTheGoodNodes.Process(LRHead));
            Console.WriteLine(CountTheGoodNodes.ProcessString(LRHead));
            Console.WriteLine("----Reverse Only Letters----");
            Console.WriteLine((int)'0');
            Console.WriteLine((int)'9');
            Console.WriteLine(ReverseOnlyLetters.Process("Test1ng-Leet=code-Q!"));
        }
    }
}
