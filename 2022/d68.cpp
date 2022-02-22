// https://www.acmicpc.net/problem/2750
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    int n;
    vector<int> num;
    cin >> n;

    for (int i = 0; i < n; i++)
    {
        int a;
        cin >> a;
        num.push_back(a);
    }

    sort(num.begin(), num.end());

    for (int i = 0; i < n; i++)
        cout << num[i] << "\n";
}