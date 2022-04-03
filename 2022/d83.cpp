// https://www.acmicpc.net/problem/9076
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    int T;
    vector<vector<int> > scores;
    vector<int> sc;
    cin >> T;

    for (int i = 0; i < T; i++)
    {
        for (int j = 0; j < 5; j++)
        {
            int a;
            cin >> a;
            sc.push_back(a);
        }
        sort(sc.begin(), sc.end());
        scores.push_back(sc);
        sc.clear();
    }

    for (int i = 0; i < T; i++)
    {
        if (scores[i][3] - scores[i][1] >= 4)
            cout << "KIN\n";
        else
            cout << scores[i][1] + scores[i][2] + scores[i][3] << "\n";
    }
}