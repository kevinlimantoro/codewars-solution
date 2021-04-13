using System;
using System.Collections.Generic;

namespace Solution
{
    public class LongestUniqueConcatenateString
    {
        public static int Process(IList<String> arr)
        {
            return check(arr, 0, 0, 0);
        }
        private static int check(IList<String> arr, int set, int pos, int sum)
        {
            if (pos == arr.Count)
            {
                return sum;
            }
            String curStr = arr[pos];
            int previousSet = set;
            for (int i = 0; i < curStr.Length; i++)
            {
                char c = curStr[i];
                if ((set >> (c - 'a') & 1) == 1)
                {
                    set = previousSet; //if this letter appears before, reverse the set
                    break;
                }
                else
                {
                    set |= 1 << (c - 'a'); //append the letter to the right position
                }
            }
            if (set == previousSet)
            { //this word is not allowed to use, so just check the result without it
                return check(arr, set, pos + 1, sum);
            }
            else
            { //this word is allowed to use, then 2 senarios should be checked, with it or without it.
                return Math.Max(check(arr, previousSet, pos + 1, sum), check(arr, set, pos + 1, sum + curStr.Length));
            }
        }
    }
}
