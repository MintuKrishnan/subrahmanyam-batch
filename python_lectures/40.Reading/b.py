
def compare(str1, str2):

    store = {}
    for i in str1:
        if i in store:
            store[i] += 1
        else:
            store[i] = 1
    for i in str2:
        if i in store:
            store[i] -= 1
        else:
            continue
    count = 0

    for key, val in store.items():
        if val > 0:
            count += val
    return count


if __name__ == "__main__":
    str1 = input()
    str2 = input()
    print(compare(str1, str2))
