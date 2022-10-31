// https://www.acmicpc.net/problem/3003
#include <iostream>
using namespace std;

int main()
{
    int chess[6] = {1, 1, 2, 2, 2, 8};
    int mine[6] = {};
    int white[6] = {};

    for (int i = 0; i < 6; i++)
    {
        cin >> mine[i];
        white[i] = chess[i] - mine[i];
    }

    for (int i = 0; i < 6; i++)
    {
        cout << white[i] << " ";
    }
}