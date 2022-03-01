// https://www.acmicpc.net/problem/4458
#include <iostream>
#include <string>
#include <vector>
using namespace std;

int main()
{
    int n;
    vector<string> str;
    cin >> n;
    cin.ignore();

    for (int i = 0; i < n; i++)
    {
        string s;
        getline(cin, s);
        if (s[0] >= 'a')
            s[0] = s[0] - ('a' - 'A');
        str.push_back(s);
    }

    for (int i = 0; i < n; i++)
    {
        cout << str[i] << "\n";
    }
}