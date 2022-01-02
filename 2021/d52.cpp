// https://www.acmicpc.net/problem/10797
#include <iostream>
using namespace std;

int main() {
    int n, car[5], count=0;
    cin >> n;
    for (int i=0; i<5; i++) {
        cin >> car[i];

        if (n == car[i]) count++;
    }

    cout << count << "\n";
}