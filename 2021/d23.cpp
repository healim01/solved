// https://www.acmicpc.net/problem/1110
#include <iostream>
using namespace std;

int main() {
    int num, s, count=0;
    cin >> num;
    s = num;


    while (1) {
        int n1 = s/10;
        int n2 = s%10;
        s = (n2*10) + (n1+n2)%10;
        count++;
        if (s == num) break;
    }
    cout << count << endl;
}