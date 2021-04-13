using System;

namespace Solution
{
    public class LargestKSuchBothKAndMinusKExists
    {
        public static int Process(int[] input)
        {
            Array.Sort(input);
            var p1 = 0;
            var p2 = input.Length - 1;
            while (p1 != p2)
            {
                if (input[p2] == (input[p1] * -1))
                    return input[p2];
                else if ((input[p1] * -1) > input[p2])
                    p1++;
                else
                    p2--;
            }
            return 0;
        }
    }
}
