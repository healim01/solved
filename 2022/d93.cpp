// https://www.acmicpc.net/problem/2480
#include <iostream>
using namespace std;

int main()
{
    int num[3] = {};
    int same = 0;
    int count = 0;
    int price = 0;

    cin >> num[0] >> num[1] >> num[2];

    if (num[0] == num[1])
    {
        count++;
        same = num[0];
    }
    if (num[1] == num[2])
    {
        count++;
        same = num[1];
    }
    if (num[2] == num[0])
    {
        count++;
        same = num[2];
    }

    if (count == 3)
        price = 10000 + (same * 1000);
    else if (count == 1)
        price = 1000 + (same * 100);
    else
    {
        if (num[0] >= num[1] && num[0] >= num[2])
            same = num[0];
        else if (num[1] >= num[0] && num[1] >= num[2])
            same = num[1];
        else
            same = num[2];
        price = (same * 100);
    }

    cout << price << "\n";
}