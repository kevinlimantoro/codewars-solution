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
        }
    }
}
