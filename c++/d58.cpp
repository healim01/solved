#include <iostream>
using namespace std;

int main()
{
    int num1, num2;
    cin >> num1 >> num2;
    int a[3], b[3];

    for (int i = 0; i < 3; i++)
    {
        a[i] = num1 % 10;
        num1 /= 10;
    }
    num1 = a[0] * 100 + a[1] * 10 + a[2];
    for (int i = 0; i < 3; i++)
    {
        b[i] = num2 % 10;
        num2 /= 10;
    }
    num2 = b[0] * 100 + b[1] * 10 + b[2];

    if (num1 > num2)
        cout << num1 << "\n";
    else
        cout << num2 << "\n";
}