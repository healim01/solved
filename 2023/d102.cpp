// https://www.acmicpc.net/problem/1929
#include <iostream>
#include <cmath>
using namespace std;

bool isprimeNum(int x)
{
    if (x == 1)
        return false;

    for (int i = 2; i <= sqrt(x); i++)
    {
        if (x % i == 0)
            return false;
    }
    return true;
}

int main()
{
    int m, n;
    cin >> m >> n;

    for (int i = m; i <= n; i++)
    {
        if (isprimeNum(i) == true)
            cout << i << "\n";
    }
}