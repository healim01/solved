#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    int n, m, result = 0;
    cin >> n >> m;

    vector<int> trees(n);

    for (int i = 0; i < n; i++)
    {
        cin >> trees[i];
    }

    int lo = 0, hi = *max_element(trees.begin(), trees.end());

    while (lo <= hi)
    {
        int mid = (lo + hi) / 2;

        long long length = 0;
        for (int i = 0; i < n; i++)
        {
            if (trees[i] > mid)
                length += trees[i] - mid;
        }

        if (length >= m)
        {
            result = mid;
            lo = mid + 1;
        }
        else
            hi = mid - 1;
    }

    cout << result << endl;
}