using System;

namespace Solution
{
    public class MinStepsToMakePilesEqualHeight
    {
        public static int Process(int[] s)
        {
            var res = 0;
            var needToReducePile = 0;
            Array.Sort(s);
            Console.WriteLine(String.Join(",", s));
            for (int i = 0; i < (s.Length - 1); i++)
            {
                if (s[i] == s[i + 1])
                    res += needToReducePile;
                else
                {
                    needToReducePile++;
                    res += needToReducePile;
                }
            }
            return res;
        }
    }
}
