// https://www.acmicpc.net/problem/2693
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    int n;
    vector<int> arr;
    vector<int> three;
    cin >> n;

    for (int i = 0; i < n; i++)
    {
        arr.clear();
        for (int j = 0; j < 10; j++)
        {
            int a;
            cin >> a;
            arr.push_back(a);
        }
        sort(arr.begin(), arr.end(), greater<int>());
        three.push_back(arr[2]);
    }

    for (int i = 0; i < n; i++)
        cout << three[i] << "\n";
}