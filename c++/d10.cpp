// https://www.acmicpc.net/problem/2884
#include <iostream>
using namespace std;

int main() {
    int h, m;
    cin >> h >> m;

    if (m<45) {
        if (h==0) h=23;
        else h--;
        m = m + 60 - 45;
    }
    else m -= 45;

    cout << h << " " << m << endl;
}