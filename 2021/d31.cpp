// https://www.acmicpc.net/problem/5635
#include <iostream>
using namespace std;

int main() {
    int n, day[100], month[100], year[100];
    int max_y=0, max_m=0, max_d=0;
    int min_y=0, min_m=0, min_d=0;
    int max=0, min=0;
    string name[100];
    string max_n, min_n;

    cin >> n;

    for (int i=0; i<n; i++) {
        cin >> name[i] >> day[i] >> month[i] >> year[i];
        if (i==0) {
            max=1;
            min=1;
        }

        if (year[i] < max_y) max=1;
        else if (year[i] == max_y){
            if (month[i] < max_m) max=1;
            else if (month[i] == max_m) {
                if (day[i] < max_d) max=1;
            }
        }
        
        if (year[i] > min_y) min=1;
        else if (year[i] == min_y){
            if (month[i] < min_m) min=1;
            else if (month[i] == min_m) {
                if (day[i] < min_d) min=1;
            }
        }

        if (max==1) {
            max_y = year[i];
            max_m = month[i];
            max_d = day[i];
            max_n = name[i];
        }
        if (min==1) {
            min_y = year[i];
            min_m = month[i];
            min_d = day[i];
            min_n = name[i];
        }
        max=0;
        min=0;
    }

    cout << min_n << "\n" << max_n << "\n";
 
}