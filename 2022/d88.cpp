// https://www.acmicpc.net/problem/10996
#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;

    for (int i = 0; i < n; i++)
    {
        if (n == 0)
        {
            cout << "*";
            break;
        }

        if (n % 2 == 1)
        {
            for (int j = 0; j < n / 2 + 1; j++)
                cout << "* ";
        }
        else
        {
            for (int j = 0; j < n / 2; j++)
                cout << "* ";
        }
        cout << "\n";
        for (int j = 0; j < n / 2; j++)
            cout << " *";
        cout << "\n";
    }
}