// https://www.acmicpc.net/problem/11720
#include <iostream>
using namespace std;

int main()
{
    int n;
    char m[101];
    int sum = 0;
    cin >> n >> m;

    for (int i = 0; i < n; i++)
    {
        sum += (m[i] - '0');
    }
    cout << sum << "\n";
}