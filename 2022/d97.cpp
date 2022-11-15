// https://www.acmicpc.net/problem/1157
#include <iostream>
using namespace std;

int main()
{
    string a;
    int alpha[26] = {0}, max = 0, max_alpha = 0;
    cin >> a;

    for (int i = 0; i < a.length(); i++)
    {
        int n = tolower(a[i]) - 'a';
        alpha[n]++;
    }

    for (int i = 0; i < 26; i++)
    {

        if (alpha[i] > max)
        {
            max = alpha[i];
            max_alpha = i;
        }
        else if (alpha[i] == max && max != 0)
        {
            max_alpha = 100;
        }
    }

    if (max_alpha == 100)
        cout << "?\n";
    else
        cout << (char)('A' + max_alpha) << endl;
}