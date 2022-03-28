// https://www.acmicpc.net/problem/10807
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    int n, v, count = 0;
    vector<int> num;
    cin >> n;

    for (int i = 0; i < n; i++)
    {
        int a;
        cin >> a;
        num.push_back(a);
    }

    cin >> v;

    sort(num.begin(), num.end());
    for (int i = 0; i < n; i++)
    {
        if (num[i] == v)
            count++;
        else if (num[i] > v)
            break;
    }

    cout << count << "\n";
}