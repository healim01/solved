// https://www.acmicpc.net/problem/1978
#include <iostream>
using namespace std;

int main() {
    int n, a, prime=0;
    cin >> n;

    for (int i=0; i<n; i++) {
        int count=0;
        cin >> a;
        for (int j=1; j<=a; j++) {
            if (a%j==0) count++;
        }
        if (count == 2) prime++;
    }

    cout << prime << "\n";
}