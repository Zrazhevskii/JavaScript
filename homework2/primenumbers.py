import datetime
# from time import process_time



number = int(input("Введите число: "))
start_time = datetime.datetime.now()


def numbers(num):
    i = 1
    s = []
    while len(s) < num:
        c = 0
        for j in range(1, i + 1):
            if i % j == 0:
                c += 1
        if c == 2:
            s.append(i)
        i += 1
    return s


print('Время выполнения: ', datetime.datetime.now() - start_time)
print(numbers(number))
