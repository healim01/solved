// https://www.acmicpc.net/problem/2751
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    int n, a;
    vector<int> vec;
    cin >> n;

    for (int i = 0; i < n; i++)
    {
        cin >> a;
        vec.push_back(a);
    }

    sort(vec.begin(), vec.end());

    for (int i = 0; i < n; i++)
    {
        cout << vec[i] << "\n";
    }
}