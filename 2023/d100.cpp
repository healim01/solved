// https://www.acmicpc.net/problem/1037
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    int m, a, N;
    vector<int> arr;

    cin >> m;
    for (int i = 0; i < m; i++)
    {
        cin >> a;
        arr.push_back(a);
    }

    sort(arr.begin(), arr.end());

    N = arr[0] * arr[m - 1];
    cout << N << "\n";
}