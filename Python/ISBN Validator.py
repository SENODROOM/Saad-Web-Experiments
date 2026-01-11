def validate_isbn(isbn, length):
    # Check if ISBN has the correct length
    if len(isbn) != length:
        print(f"ISBN-{length} code should be {length} digits long.")
        return

    main_digits = isbn[:-1]  # all except the last character
    given_check_digit = isbn[-1]  # last character

    # Check for invalid characters in main digits
    if not main_digits.isdigit():
        print("Invalid character was found.")
        return

    main_digits_list = [int(digit) for digit in main_digits]

    # Calculate the check digit
    if length == 10:
        expected_check_digit = calculate_check_digit_10(main_digits_list)
    else:
        expected_check_digit = calculate_check_digit_13(main_digits_list)

    # Validate
    if given_check_digit.upper() == expected_check_digit:
        print("Valid ISBN Code.")
    else:
        print("Invalid ISBN Code.")


def calculate_check_digit_10(main_digits_list):
    digits_sum = sum(
        digit * (10 - index) for index, digit in enumerate(main_digits_list)
    )
    result = 11 - digits_sum % 11
    if result == 11:
        return "0"
    elif result == 10:
        return "X"
    else:
        return str(result)


def calculate_check_digit_13(main_digits_list):
    digits_sum = sum(
        digit * (1 if index % 2 == 0 else 3)
        for index, digit in enumerate(main_digits_list)
    )
    result = 10 - digits_sum % 10
    if result == 10:
        return "0"
    else:
        return str(result)


def main():
    user_input = input("Enter ISBN and length: ")
    try:
        values = user_input.split(",")
        if len(values) != 2:
            print("Enter comma-separated values.")
            return

        isbn = values[0].strip()
        try:
            length = int(values[1].strip())
        except ValueError:
            print("Length must be a number.")
            return

        if length not in [10, 13]:
            print("Length should be 10 or 13.")
            return

        validate_isbn(isbn, length)

    except IndexError:
        print("Enter comma-separated values.")


# main()  # Commented out for automated tests
