import sys


def has_two_same_adjecent_digits(digits):
    for i in range(1, len(digits)):
        if digits[i] == digits[i - 1]:
            return True
    return False


def has_increasing_digits(digits):
    for i in range(1, len(digits)):
        if digits[i] < digits[i - 1]:
            return False
    return True


def find_passwords(start: int, end: int) -> list:
    passwords = []
    for number in range(start, end + 1):
        digits = str(number)
        if has_two_same_adjecent_digits(digits) and has_increasing_digits(digits):
            passwords.append(number)
    return passwords


def has_exactly_two_same_adjecent_digits(number):
    pass


def find_correct_passwords(passwords):
    correct_passwords = []
    for number in passwords:
        digits = str(number)
        deltas = []
        for i in range(1, len(digits)):
            deltas.append(int(str(int(digits[i - 1]) - int(digits[i]))))
        for i, delta in enumerate(deltas):
            if (
                (i == 0 and delta == 0 and deltas[i + 1] != 0)
                or (i == len(deltas) - 1 and delta == 0 and deltas[i - 1] != 0)
                or (delta == 0 and deltas[i - 1] != 0 and deltas[i + 1] != 0)
            ):
                correct_passwords.append(number)
                break
    return correct_passwords


def part1(start, end):
    passwords = find_passwords(start, end)
    return passwords


def part2(passwords):
    correct_passwords = find_correct_passwords(passwords)
    return correct_passwords


if __name__ == "__main__":
    puzzle_input = sys.stdin.read()
    ranges = puzzle_input.split("-")
    start = int(ranges[0])
    end = int(ranges[1])

    passwords = part1(start, end)
    print(len(passwords))

    correct_passwords = part2(passwords)
    print(len(correct_passwords))
