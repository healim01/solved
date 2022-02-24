// https://www.acmicpc.net/problem/5218
#include <iostream>
#include <vector>
using namespace std;

int main()
{
    int n;
    vector<vector<int> > dis;
    cin >> n;

    for (int i = 0; i < n; i++)
    {
        string a, b;
        vector<int> dd;
        cin >> a >> b;

        for (int j = 0; j < a.length(); j++)
        {
            int d = 0;
            if (b[j] >= a[j])
                d = b[j] - a[j];
            else
                d = (b[j] + 26) - a[j];

            dd.push_back(d);
        }
        dis.push_back(dd);
    }

    for (int i = 0; i < n; i++)
    {
        cout << "Distances: ";
        for (int j = 0; j < dis[i].size(); j++)
        {
            cout << dis[i][j] << " ";
        }
        cout << "\n";
    }
}