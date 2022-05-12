// https://www.acmicpc.net/problem/1357
#include <iostream>
#include <vector>
#include <math.h>
using namespace std;

int rev(int n)
{
    int a = 0, count = 0;
    vector<int> vec;

    while (1)
    {
        if (n < 10)
        {
            vec.push_back(n);
            break;
        }
        else
        {
            vec.push_back(n % 10);
            n = n / 10;
            count++;
        }
    }

    for (int i = 0; i < count; i++)
    {
        a += (vec[i] * pow(10, (count - i)));
    }
    a += vec[count];

    return a;
}

int main()
{
    int x, y;
    cin >> x >> y;

    cout << rev(rev(x) + rev(y)) << endl;
}