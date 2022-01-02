// https://www.acmicpc.net/problem/1977
#include <iostream>
using namespace std;

int main() {
    int m, n, sum=0, min, num=1;
    cin >> m >> n;

    for (int i=m; i<=n; i++) {
        while (1){
            if (num * num == i) {
                if (sum==0) min = i;
                sum += i;
                break;
            }
            if (num*num > i) {
                num=1;
                break;
            }
            num++;
        }
    }

    if (sum==0) cout << -1 << "\n";
    else cout << sum << "\n" << min << "\n";
}