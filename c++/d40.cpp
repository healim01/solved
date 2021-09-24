// https://www.acmicpc.net/problem/9325
#include <iostream>
using namespace std;

int main() {
    int t, s, n;
    int p[100], q[1000];
    cin >> t;

    for (int i=0; i<t; i++) {
        cin >> s >> n;
        for (int j=0; j<n; j++) {
            cin >> p[j] >> q[j];
            s += p[j] * q[j];
        }
        cout << s << "\n";
    }
}