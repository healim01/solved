// https://www.acmicpc.net/problem/5597
#include <iostream>
using namespace std;

int main()
{
    int a, std[30] = {0};

    for (int i = 0; i < 28; i++)
    {
        cin >> a;
        std[a - 1] = 1;
    }

    for (int i = 0; i < 30; i++)
    {
        if (std[i] == 0)
            cout << i + 1 << "\n";
    }
}