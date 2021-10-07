// https://www.acmicpc.net/problem/9295
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    vector <int> vec;

    cin >> n;

    for (int i=0; i<n; i++) {
        int a,b;
        cin >> a >> b;
        vec.push_back(a+b);
    }

    for (int i=0; i<n; i++) {
        cout << "Case " << (i+1) << ": " << vec[i] << "\n";
    }
} 