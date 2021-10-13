// https://www.acmicpc.net/problem/2490
#include <iostream>
using namespace std;

int main() {
    int n[3][4];
    char c[3];

    for (int i=0; i<3; i++) {
        int sum = 0;
        for (int j=0; j<4; j++) {
            cin >> n[i][j];
            sum += n[i][j];
        }
        if (sum == 3) c[i] = 'A'; // 도
        else if (sum == 2) c[i] = 'B'; // 개  
        else if (sum == 1) c[i] = 'C'; // 걸 
        else if (sum == 0) c[i] = 'D'; // 윷
        else if (sum == 4) c[i] = 'E'; // 모 
    }

    for (int i=0; i<3; i++) cout << c[i] << "\n";

} 