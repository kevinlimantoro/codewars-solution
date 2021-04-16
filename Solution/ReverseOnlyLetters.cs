namespace Solution
{
    public class ReverseOnlyLetters
    {
        // 0 - 9 = 48 - 57
        // A - Z = 65 - 90
        // a - z = 97 - 122
        public static string Process(string input)
        {
            var p1 = 0;
            var p2 = input.Length - 1;
            bool IsValid(char x) =>
                (x >= 65 && x <= 90) ||
                (x >= 97 && x <= 122);
            var inputArray = input.ToCharArray();
            while (p1 < p2)
            {
                if (IsValid(inputArray[p1]) && IsValid(inputArray[p2]))
                {
                    char temp = inputArray[p1];
                    inputArray[p1] = inputArray[p2];
                    inputArray[p2] = temp;
                    p1++;
                    p2--;
                }
                else
                {
                    if (!IsValid(inputArray[p1])) p1++;
                    if (!IsValid(inputArray[p2])) p2--;
                }
            }
            return string.Join("", inputArray);
        }
    }
}
