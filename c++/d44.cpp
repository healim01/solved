// https://www.acmicpc.net/problem/9085
#include <iostream>
using namespace std;

int main() {
    int n, a, b, sum=0;
    cin >> n;

    for (int i=0; i<n; i++) {
        cin >> a;
        sum = 0;
        for (int j=0; j<a; j++) {
            cin >> b;
            sum += b;
        }
        cout << sum << "\n";
    }   
}