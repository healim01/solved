//
#include <iostream>
using namespace std;

int main()
{
    int h, m;
    int min;

    int cookH, cookM;

    cin >> h >> m;
    cin >> min;

    cookH = h;
    cookM = m + min;

    while (1)
    {
        if (cookM >= 60)
        {
            cookM -= 60;
            cookH++;
        }
        else
            break;
    }

    if (cookH >= 24)
    {
        cookH -= 24;
    }

    cout << cookH << " " << cookM;
}