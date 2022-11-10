// https://www.acmicpc.net/problem/4673
#include <iostream>
using namespace std;

int sumNum(int a)
{
    int sum = a;
    while (1)
    {
        if (a <= 0)
            break;
        sum += a % 10;
        a /= 10;
    }
    return sum;
}

int main()
{
    int num[10000] = {0};
    for (int i = 1; i < 10000; i++)
    {
        int n = sumNum(i);
        if (n > 10000)
            continue;
        else if (n != i)
            num[n - 1] = 1;
    }

    for (int i = 0; i < 10000; i++)
    {
        if (num[i] == 0)
            cout << i + 1 << "\n";
    }
}