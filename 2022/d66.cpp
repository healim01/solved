// https://www.acmicpc.net/problem/10808
#include <iostream>
using namespace std;

int main()
{
    string s;
    int abc[26] = {0};
    cin >> s;

    for (int i = 0; i < s.length(); i++)
    {
        int n = s[i] - 'a';
        abc[n]++;
    }

    for (int i = 0; i < 26; i++)
        cout << abc[i] << " ";
}