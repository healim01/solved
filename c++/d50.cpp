// https://www.acmicpc.net/problem/10569
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int T;
    vector <int> n;
    cin >> T;

    for (int i=0; i<T; i++) {
        int a, b;
        cin >> a >> b;
        n.push_back(2+b-a);
    }

    for (int i=0; i<T; i++) cout << n[i] << "\n";
}