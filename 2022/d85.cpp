// https://www.acmicpc.net/problem/5543
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    vector<int> burger;
    int cola, sprite;

    for (int i = 0; i < 3; i++)
    {
        int a;
        cin >> a;
        burger.push_back(a);
    }
    cin >> cola >> sprite;

    sort(burger.begin(), burger.end());

    if (cola > sprite)
        cout << burger[0] + sprite - 50 << "\n";
    else
        cout << burger[0] + cola - 50 << "\n";
}