#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    int k, n;
    cin >> k >> n;
    vector<long long> line(k);

    for (int i = 0; i < k; i++) {
        cin >> line[i];
    }

    long long lo = 1, hi = *max_element(line.begin(), line.end());
    long long result = 0;

    while (lo <= hi) {
        long long mid = (lo + hi) / 2;
        long long count = 0;

        for (int i = 0; i < k; i++) {
            count += line[i] / mid;
        }

        if (count >= n) {
            result = mid; 
            lo = mid + 1; 
        } else {
            hi = mid - 1; 
        }
    }

    cout << result << endl;

    return 0;
}
