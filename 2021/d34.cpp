// https://www.acmicpc.net/problem/2609
#include <iostream>
using namespace std;

int main() {
    int a, b, big;
    int factor, multi;
    cin >> a >> b;

    if (a > b) big = a;
    else big  = b;

    for (int i=big; i>0; i--) {
        if (a%i==0 && b%i==0) {
            factor = i;
            break;
        }
    }

    for (int i=big; i<=a*b; i++) {
        if (i%a==0 && i%b==0) {
            multi = i;
            break;
        }
    }
    
    cout << factor << "\n" << multi << "\n"; 
}