def cheapBooks(k, price, cost):
    n = len(cost)
    table = [[0 for x in range(k + 1)] for x in range(n + 1)]

    for i in range(n + 1):
        for j in range(k + 1):
            if i == 0 or j == 0:
                table[i][j] = 0
            elif price[i-1] <= j:
                table[i][j] = max(cost[i-1]
                                  + table[i-1][j-price[i-1]],  table[i-1][j])
            else:
                table[i][j] = table[i-1][j]

    return table[n][k]


if __name__ == "__main__":
    n, k = list(map(int, input().strip().split()))
    price = list(map(int, input().strip().split()))
    cost = list(map(int, input().strip().split()))
    print(cheapBooks(n, price, cost))
