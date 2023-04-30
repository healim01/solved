// https://www.acmicpc.net/problem/1924
#include <iostream>
using namespace std;

int main()
{
    string day[7] = {"SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"};
    int monthDate[12] = {31,
                         28,
                         31,
                         30,
                         31,
                         30,
                         31,
                         31,
                         30,
                         31,
                         30,
                         31};

    int month,
        date, count;
    cin >> month >> date;

    count = date;
    for (int i = 0; i < month - 1; i++)
        count += monthDate[i];

    cout << day[count % 7] << "\n";

    return 0;
}