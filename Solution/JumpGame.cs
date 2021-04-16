namespace Solution
{
    public class JumpGame
    {
        public static bool Process(int[] input, int start) => JumpDFS(input, start, new bool[input.Length]);
        private static bool JumpDFS(int[] input, int start, bool[] jumped)
        {
            if (start < 0 || start == input.Length)
                return false;
            if (jumped[start])
                return false;
            jumped[start] = true;
            if (input[start] == 0)
                return true;
            return JumpDFS(input, start - 1, jumped) || JumpDFS(input, start + 1, jumped);
        }
    }
}
