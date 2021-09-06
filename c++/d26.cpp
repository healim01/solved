// https://www.acmicpc.net/problem/2577
#include <iostream>
using namespace std;

int main() {
    int a, b, c, mul;
    int num[10] = {0};
    cin >> a >> b >> c;

    mul = a * b * c;

    while (1) {
        if (mul == 0) break;
        int n = mul%10;
        num[n]++;
        mul = mul/10;
    }
    
    for (int i=0; i<10; i++) {
        cout << num[i] << "\n";
    }
}