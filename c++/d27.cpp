// https://www.acmicpc.net/problem/1546
#include <iostream>
using namespace std;

int main() {
    int n, max=0;
    double newsum=0, avg;
    cin >> n;
    int score[n];

    for (int i=0; i<n; i++) {
        cin >> score[i];
        if (score[i] > max) max = score[i];
    }

    for (int i=0; i<n; i++) {
        newsum += score[i]/(max*1.0)*100;
    }
    avg = newsum / n;

    cout << avg << "\n";
}