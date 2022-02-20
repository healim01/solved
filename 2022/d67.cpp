// https://www.acmicpc.net/problem/2587
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    vector<int> num;
    int n, total = 0;

    for (int i = 0; i < 5; i++)
    {
        cin >> n;
        total += n;
        num.push_back(n);
    }

    sort(num.begin(), num.end());

    cout << total / 5.0 << "\n"
         << num[2];
}