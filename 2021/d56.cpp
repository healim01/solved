// https://www.acmicpc.net/problem/2455
#include <iostream>
using namespace std;

int main() {
    int n = 4, a, b, sum=0, max=0;
    for (int i=0; i<n; i++) {
        cin >> a >> b;
        sum = sum - a + b;
        if (sum > max) max = sum;
    }
    cout << max << "\n";
}