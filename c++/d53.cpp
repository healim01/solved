// https://www.acmicpc.net/problem/2506
#include <iostream>
using namespace std;

int main() {
    int n, ans, score=0, jum=1;
    cin >> n;

    for (int i=0; i<n; i++) {
        cin >> ans;

        if (ans == 1) {
            score += jum;
            jum++;
        }
        else jum=1;
    }

    cout << score << "\n";
}