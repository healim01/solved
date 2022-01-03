// https://www.acmicpc.net/problem/2744
#include <iostream>
using namespace std;

int main()
{
    string word;
    cin >> word;

    for (int i = 0; i < word.length(); i++)
    {
        if (word[i] <= 'Z')
            word[i] += 'a' - 'A';
        else
            word[i] -= 'a' - 'A';
    }

    cout << word << endl;
}