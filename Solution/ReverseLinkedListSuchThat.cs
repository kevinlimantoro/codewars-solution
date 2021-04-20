using System;

namespace Solution
{
    //Input:  1 -> 2 -> 3 -> 4
    //Output: 1 -> 4 -> 2 -> 3

    //Input:  1 -> 2 -> 3 -> 4 -> 5
    //Output: 1 -> 5 -> 2 -> 4 -> 3
    public class ReverseLinkedListSuchThat
    {
        public Node left = null;

        // Function to print the list
        public void printlist(Node head)
        {
            while (head != null)
            {
                Console.Write(head.data + " ");
                if (head.next != null)
                {
                    Console.Write("->");
                }
                head = head.next;
            }
            Console.WriteLine();
        }

        // Function to rearrange
        public void rearrange(Node head)
        {

            if (head != null)
            {
                left = head;
                reorderListUtil(left);
            }
        }

        public void reorderListUtil(Node right)
        {

            if (right == null)
            {
                return;
            }

            reorderListUtil(right.next);

            // We set left = null, when we reach stop
            // condition, so no processing required
            // after that
            if (left == null)
            {
                return;
            }

            // Stop condition: odd case : left = right, even
            // case : left.next = right
            if (left != right && left.next != right)
            {
                Console.WriteLine(left.data + " -> " + right.data);
                Node temp = left.next;
                left.next = right;
                right.next = temp;
                left = temp;
            }
            else
            {

                // Stop condition , set null to left nodes
                if (left.next == right)
                {

                    // Even case
                    left.next.next = null;
                    left = null;
                }
                else
                {

                    // Odd case
                    left.next = null;
                    left = null;
                }
            }
        }

    }
}
