// https://www.acmicpc.net/problem/10818
#include <iostream>
using namespace std;

int main() {
    int n, a;
    int max, min;
    cin >> n;

    for (int i=0; i<n; i++) {
        cin >> a;
        if (i==0) {
            max=a;
            min=a;
        }
        else if (a > max) max = a;
        else if (a < min) min = a;
    }
    cout << min << " " << max << "\n";
}