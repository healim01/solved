// https://www.acmicpc.net/problem/2475
#include <iostream>
using namespace std;

int main() {
    int n[5], p=0;
    for (int i=0; i<5; i++) {
        cin >> n[i];
        p += n[i] * n[i];
    }

    p = p % 10;
    cout << p << "\n";
}