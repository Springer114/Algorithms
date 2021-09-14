using System;

namespace ShortLongShort
{
    class Program
    {
        static void Main(string[] args)
        {
            Solution("1", "22");
            Solution("22", "1");
            Solution("232", "1");
            Solution("232", "");
            Solution("232", "2132");
        }
        public static string Solution(string a, string b)
        {
            if (a.Length < b.Length) {
                Console.WriteLine(a + b + a);
                return a + b + a;
            } else {
                Console.WriteLine(b + a + b);
                return b + a + b;
            }
        }
    }
}