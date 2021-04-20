using System;
using System.Collections;

namespace Solution
{
    public class ReverseLinkedListSimple
    {
        public static void PrintReverse(Node head)
        {
            if (head == null)
                return;

            PrintReverse(head.next);
            Console.Write(head.data + "->");
        }
        public static void Print(Node head)
        {
            var current = head;
            while (current != null)
            {
                Console.Write(current.data + "->");
                current = current.next;
            }
        }
        public static Node ProcessWithLoopCreate(Node head)
        {
            Node prev = null, current = head, next = null;
            while (current != null)
            {
                next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }
            return prev;
        }
        public static Node ProcessWithStackCreate(Node head)
        {
            var index = -1;
            ArrayList data = new ArrayList();
            var current = head;
            while (current != null)
            {
                data.Add(current.data);
                index++;
                current = current.next;
            }
            head = null;
            while (index >= 0)
            {
                if (head == null)
                {
                    current = new Node((int)data[index--]);
                    head = current;
                }
                else
                {
                    current.next = new Node((int)data[index--]);
                    current = current.next;
                }
            }
            return head;
        }
    }
}
