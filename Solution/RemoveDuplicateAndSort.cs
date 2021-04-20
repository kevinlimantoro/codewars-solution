namespace Solution
{
    public class RemoveDuplicateAndSort
    {
        public static string Process(string input)
        {
            bool[] dt = new bool[26];
            var res = "";
            foreach (var i in input)
            {
                if (!dt[i - 'a'])
                    dt[i - 'a'] = true;
            }
            for (int i = 0; i < dt.Length; i++)
            {
                if (dt[i])
                    res += (char)('a' + i);
            }
            return res;
        }
    }
}
