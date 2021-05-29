
def maxPrefix(n, k, array):
    s = 0
    nl = []
    nl.append(array[0])
    s = array[0]
    for i in range(1, n):
        s += array[i]
        nl.append(s)

    for i in range(n-1, -1, -1):
        if(nl[i] <= k):
            return i
    return -1


if __name__ == "__main__":
    n, k = map(int, input().strip().split())
    array = list(map(int, input().strip().split()))
    print(maxPrefix(n, k, array))
