// https://www.acmicpc.net/problem/2562
#include <iostream>
using namespace std;

int main() {
    int n[9], max=0, max_i=0;

    for (int i=0; i<9; i++) {
        cin >> n[i];

        if (n[i] > max) {
            max = n[i];
            max_i = i+1;
        }
    }

    cout << max << "\n" << max_i << "\n";
}