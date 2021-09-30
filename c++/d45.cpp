// https://www.acmicpc.net/problem/10178
#include <iostream>
using namespace std;

int main() {
    int n, candy, kid;
    cin >> n;

    for (int i=0; i<n; i++) {
        cin >> candy >> kid; 
        cout << "You get " << candy/kid << " piece(s) and your dad gets " << candy%kid << " piece(s).\n"; 
    }
}