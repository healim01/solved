// https://www.acmicpc.net/problem/10821
#include <iostream>
using namespace std;

int main()
{
    string str;
    int num = 1;
    cin >> str;

    for (int i = 0; i < str.length(); i++)
    {
        if (str[i] == ',')
            num++;
    }
    cout << num << "\n";
}