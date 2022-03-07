// https://www.acmicpc.net/problem/11655
#include <iostream>
using namespace std;

int main()
{
    string str;
    getline(cin, str);

    for (int i = 0; i < str.length(); i++)
    {
        if ('A' <= str[i] && str[i] <= 'M')
            str[i] += 13;
        else if ('N' <= str[i] && str[i] <= 'Z')
            str[i] -= 13;
        else if ('a' <= str[i] && str[i] <= 'm')
            str[i] += 13;
        else if ('n' <= str[i] && str[i] <= 'z')
            str[i] -= 13;
    }

    cout << str << "\n";
}