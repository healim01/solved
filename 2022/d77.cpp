// https://www.acmicpc.net/problem/2902
#include <iostream>
using namespace std;

int main()
{
    string str, kmp;
    cin >> str;

    for (int i = 0; i < str.length(); i++)
    {
        if (str[i] == '-')
            kmp += str[i + 1];

        else if (i == 0)
            kmp = str[0];
    }
    cout << kmp << endl;
}