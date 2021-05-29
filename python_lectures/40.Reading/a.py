def minimal(str1, str2):

    inf = float('inf')
    prev = inf
    ans = []
    for i, j in enumerate(str1):
        if str1[i] == str2:
            prev = i
        if (prev == inf):
            ans.append(inf)
        else:
            ans.append(i - prev)

    prev = inf
    s = " "
    for i in range(len(str1) - 1, -1, -1):
        if str1[i] == str2:
            prev = i
        if (str2 != inf):
            ans[i] = str(min(ans[i], prev - i))

    return s.join(ans)


if __name__ == "__main__":
    str1 = input()
    str2 = input()

    print(minimal(str1, str2))
