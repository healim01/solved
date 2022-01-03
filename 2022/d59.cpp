// https://www.acmicpc.net/problem/2822
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

bool comp(int a, int b)
{
    return a > b;
}

int main()
{
    vector<pair<int, int> > score;
    vector<int> num;
    int n;
    int sum = 0;

    for (int i = 0; i < 8; i++)
    {
        cin >> n;
        score.push_back(make_pair(n, i + 1));
    }

    sort(score.rbegin(), score.rend());

    for (int i = 0; i < 5; i++)
    {
        sum += score[i].first;
        num.push_back(score[i].second);
    }
    sort(num.begin(), num.end());

    cout << sum << "\n";
    for (int i = 0; i < 5; i++)
        cout << num[i] << " ";
}
