// https://www.acmicpc.net/problem/10773
#include <iostream>
#include <vector>
using namespace std;

int main()
{
    int n, a, sum = 0;
    vector<int> num;
    cin >> n;

    for (int i = 0; i < n; i++)
    {
        cin >> a;
        if (a != 0)
            num.push_back(a);
        else
        {
            num.pop_back();
        }
    }

    for (int i = 0; i < num.size(); i++)
    {
        sum += num[i];
    }
    cout << sum << "\n";
}