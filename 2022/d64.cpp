// https://www.acmicpc.net/problem/9086
#include <iostream>
#include <string>
#include <vector>
using namespace std;

int main()
{
    int n;
    vector<string> list;
    cin >> n;

    for (int i = 0; i < n; i++)
    {
        string str, word;
        cin >> str;

        word = str[0];
        word += str[str.length() - 1];

        list.push_back(word);
    }

    for (int i = 0; i < n; i++)
    {
        cout << list[i] << "\n";
    }
}
