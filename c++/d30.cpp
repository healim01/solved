// https://www.acmicpc.net/problem/11098
#include <iostream>
using namespace std;

int main() {
    int n, p, max=0, max_n=0;
    int price[100];
    string name[100];
    string player[100];
    cin >> n;

    for (int i=0; i<n; i++) {
        cin >> p;
        max=0;
        for (int j=0; j<p; j++) {
            cin >> price[j] >> name[j];
            if (price[j] > max) {
                max = price[j];
                max_n = j;
            }
        }
        player[i] = name[max_n];
    }

    for (int i=0; i<n; i++) cout << player[i] << "\n";
}