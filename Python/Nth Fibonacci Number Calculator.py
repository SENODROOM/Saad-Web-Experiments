def fibonacci(n):
    # Initialize sequence list with the first two Fibonacci numbers
    sequence = [0, 1]

    # Handle n = 0 or n = 1 immediately
    if n == 0:
        return 0
    elif n == 1:
        return 1

    # Build the sequence iteratively for n >= 2
    for i in range(2, n + 1):
        next_value = sequence[i - 1] + sequence[i - 2]
        sequence.append(next_value)

    # Return the nth Fibonacci number
    return sequence[n]


# Test cases
print(fibonacci(0))  # 0
print(fibonacci(1))  # 1
print(fibonacci(2))  # 1
print(fibonacci(3))  # 2
print(fibonacci(5))  # 5
print(fibonacci(10))  # 55
print(fibonacci(15))  # 610
