using System;

namespace Solution
{
    public class Insert5LargestNumber
    {
        // 105 => 5105
        // 675 => 6755
        // 26 => 526
        public static int Process(int input)
        {
            var res = "";
            var inputStr = input.ToString();
            bool hasInsert = false;
            for (int i = 0; i < inputStr.Length; i++)
            {
                if (inputStr[i] - '0' < 5 && !hasInsert)
                {
                    res += "5";
                    res += inputStr[i];
                    hasInsert = true;
                }
                else
                {
                    res += inputStr[i];
                }
            }
            return Convert.ToInt32(res);
        }
    }
}
