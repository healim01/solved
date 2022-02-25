// https://www.acmicpc.net/problem/5576
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    vector<int> n1, n2;
    int n;

    for (int i = 0; i < 10; i++)
    {
        cin >> n;
        n1.push_back(n);
    }
    for (int i = 0; i < 10; i++)
    {
        cin >> n;
        n2.push_back(n);
    }
    sort(n1.begin(), n1.end());
    sort(n2.begin(), n2.end());

    cout << n1[9] + n1[8] + n1[7] << " " << n2[9] + n2[8] + n2[7] << "\n";
}