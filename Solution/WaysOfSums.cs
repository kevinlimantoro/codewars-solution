using System.Linq;

namespace Solution
{
    //As Seen on Traveloka interview
    public class WaysOfSums
    {
        public static int[][] Process(int n, int total)
        {
            int[] array = new int[n];
            for (int i = 0; i < n; i++)
            {
                array[i] = i + 1;
            }
            int[][][] ways = new int[total + 1][][];
            ways[0] = new[] { new int[0] };

            for (int i = 1; i <= total; i++)
            {
                ways[i] = (
                    from val in array.AsEnumerable()
                    where i - val >= 0
                    from subway in ways[i - val]
                    where subway.Length == 0 || subway[0] >= val
                    select Enumerable.Repeat(val, 1)
                        .Concat(subway)
                        .ToArray()
                ).ToArray();
            }

            return ways[total];
        }
    }
}
