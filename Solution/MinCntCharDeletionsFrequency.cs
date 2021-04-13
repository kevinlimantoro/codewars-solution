using System;
using System.Collections.Generic;

namespace Solution
{
    public class MinCntCharDeletionsFrequency
    { // Function to find the minimum count of
        // characters required to be deleted to make
        // frequencies of all characters unique
        public static int Process(char[] str,
                                                int N)
        {

            // Stores frequency of each
            // distinct character of str
            Dictionary<char,
                       int> mp = new Dictionary<char,
                                                int>();

            // Store frequency of each distinct
            // character such that the largest
            // frequency is present at the top
            List<int> pq = new List<int>();

            // Stores minimum count of characters
            // required to be deleted to make
            // frequency of each character unique
            int cntChar = 0;

            // Traverse the String
            for (int i = 0; i < N; i++)
            {

                // Update frequency of str[i]
                if (mp.ContainsKey(str[i]))
                {
                    mp[str[i]]++;
                }
                else
                {
                    mp.Add(str[i], 1);
                }
            }

            // Traverse the map
            foreach (KeyValuePair<char, int> it in mp)
            {

                // Insert current
                // frequency into pq
                pq.Add(it.Value);
            }
            pq.Sort((a, b) => b.CompareTo(a));
            // Traverse the priority_queue
            while (pq.Count != 0)
            {
                // Stores topmost
                // element of pq
                pq.Sort((a, b) => b.CompareTo(a));
                pq.ForEach(x => Console.Write(x));
                Console.WriteLine();
                int frequent = pq[0];

                // Pop the topmost element
                pq.RemoveAt(0);

                // If pq is empty
                if (pq.Count == 0)
                {

                    // Return cntChar
                    return cntChar;
                }

                // If frequent and topmost
                // element of pq are equal
                if (frequent == pq[0])
                {

                    // If frequency of the topmost
                    // element is greater than 1
                    if (frequent > 1)
                    {

                        // Insert the decremented
                        // value of frequent
                        pq.Add(frequent - 1);
                    }

                    // Update cntChar
                    cntChar++;
                }
            }
            return cntChar;
        }
    }
}
