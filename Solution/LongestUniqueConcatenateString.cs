using System;
using System.Collections.Generic;
using System.Linq;

namespace Solution
{
    public class LongestUniqueConcatenateString
    {
        public static int ProcessWithArray(IList<String> arr)
        {
            return checkWithArray(arr, new List<char>(), 0, 0);
        }
        public static int ProcessHumane(IList<String> arr)
        {
            return checkHumane(arr, "", 0, 0);
        }
        public static int Process(IList<String> arr)
        {
            return check(arr, 0, 0, 0);
        }
        private static int checkWithArray(IList<String> arr, IList<char> set, int pos, int sum)
        {
            if (pos == arr.Count)
            {
                return sum;
            }
            String curStr = arr[pos];
            IList<char> previousSet = new List<char>(set);
            for (int i = 0; i < curStr.Length; i++)
            {
                char c = curStr[i];
                if (set.Contains(c))
                {
                    set = previousSet; //if this letter appears before, reverse the set
                    break;
                }
                else
                {
                    set.Add(c); //append the letter to the right position
                }
            }
            if (set == previousSet)
            { //this word is not allowed to use, so just check the result without it
                return checkWithArray(arr, set, pos + 1, sum);
            }
            else
            { //this word is allowed to use, then 2 senarios should be checked, with it or without it.
                return Math.Max(checkWithArray(arr, previousSet, pos + 1, sum), checkWithArray(arr, set, pos + 1, sum + curStr.Length));
            }
        }
        private static int checkHumane(IList<String> arr, string set, int pos, int sum)
        {
            if (pos == arr.Count)
            {
                return sum;
            }
            String curStr = arr[pos];
            string previousSet = set;
            for (int i = 0; i < curStr.Length; i++)
            {
                char c = curStr[i];
                if (set.Any(x => x == c))
                {
                    set = previousSet; //if this letter appears before, reverse the set
                    break;
                }
                else
                {
                    set += c; //append the letter to the right position
                }
            }
            if (set == previousSet)
            { //this word is not allowed to use, so just check the result without it
                return checkHumane(arr, set, pos + 1, sum);
            }
            else
            { //this word is allowed to use, then 2 senarios should be checked, with it or without it.
                return Math.Max(checkHumane(arr, previousSet, pos + 1, sum), checkHumane(arr, set, pos + 1, sum + curStr.Length));
            }
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
