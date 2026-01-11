def square_root_bisection(number, tolerance=0.01, max_iterations=100):
    if number < 0:
        raise ValueError(
            "Square root of negative number is not defined in real numbers"
        )

    if number == 0 or number == 1:
        print(f"The square root of {number} is {number}")
        return number

    low = 0
    high = number if number > 1 else 1

    for _ in range(max_iterations):
        mid = (low + high) / 2

        if (high - low) <= tolerance:
            print(f"The square root of {number} is approximately {mid}")
            return mid

        if mid * mid < number:
            low = mid
        else:
            high = mid

    print(f"Failed to converge within {max_iterations} iterations")
    return None
