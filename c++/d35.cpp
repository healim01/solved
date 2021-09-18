// https://www.acmicpc.net/problem/10984
#include <iostream>
using namespace std;

int main() {
    int T;
    cin >> T;
    int n[T];
    int credit;
    double grade;
    int total_c[T];
    double total_g[T];

    for (int i=0; i<T; i++) {
        cin >> n[i];
        total_c[i]=0;
        total_g[i]=0;

        for (int j=0; j<n[i]; j++) {
            cin >> credit >> grade;
            total_c[i] += credit;
            total_g[i] += grade * credit;
        }
    }

    for (int i=0; i<T; i++) {
        printf("%d %.1f\n", total_c[i], total_g[i]/total_c[i]);
    }
}