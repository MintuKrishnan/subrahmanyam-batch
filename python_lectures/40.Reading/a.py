
def mex(A, n):

    m = max(array)

    if n == 1:
        return 2 if array[0] == 1 else 1

    if m < 1:
        return 1

    new = [0] * m
    for i in range(n):
        if array[i] > 0:
            if new[array[i] - 1] != 1:
                new[array[i] - 1] = 1
    for i in range(len(new)):

        if new[i] == 0:
            return i + 1
    return i + 2


if __name__ == "__main__":
    n = int(input())
    array = list(map(int, input().strip().split()))
    print(mex(array, n))
