// https://www.acmicpc.net/problem/3058
#include <iostream>
#include <vector>
#include <utility>
#include <algorithm>
using namespace std;

int main()
{
    int n;
    vector<int> arr;
    vector<pair<int, int> > fin;
    pair<int, int> p;
    cin >> n;

    for (int i = 0; i < n; i++)
    {
        int a, sum = 0;
        arr.clear();
        for (int j = 0; j < 7; j++)
        {
            cin >> a;
            if (a % 2 == 0)
            {
                arr.push_back(a);
                sum += a;
            }
        }
        sort(arr.begin(), arr.end());
        fin.push_back(make_pair(sum, arr[0]));
    }

    for (int i = 0; i < n; i++)
    {
        cout << fin[i].first << " " << fin[i].second << "\n";
    }
}