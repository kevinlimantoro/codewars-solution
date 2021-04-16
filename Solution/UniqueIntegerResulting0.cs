namespace Solution
{
    public class UniqueIntegerResulting0
    {
        public static int[] Process(int n)
        {
            var res = new int[n];
            if (n > 1)
            {
                for (int i = 0; i < (n / 2); i++)
                {

                    res[(i * 2)] = i + 1;
                    res[(i * 2) + 1] = -(i + 1);
                }
            }
            return res;
        }
    }
}
