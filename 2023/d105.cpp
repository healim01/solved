// https://www.acmicpc.net/problem/25314
#include <iostream>
using namespace std;

int main()
{
    int n, count = 0;
    cin >> n;

    count = n / 4;

    for (int i = 0; i < count; i++)
    {
        cout << "long ";
    }
    cout << "int\n";
}

// 16 8 4 2
