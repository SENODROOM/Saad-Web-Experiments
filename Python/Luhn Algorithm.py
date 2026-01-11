def verify_card_number(card_number):
    # Remove spaces and dashes
    clean_number = card_number.replace(" ", "").replace("-", "")

    # Convert to list of integers
    digits = [int(d) for d in clean_number]

    # Start from the second-to-last digit and double every other digit
    for i in range(len(digits) - 2, -1, -2):
        doubled = digits[i] * 2
        if doubled > 9:
            doubled -= 9
        digits[i] = doubled

    # Sum all digits
    total = sum(digits)

    # Check if total is divisible by 10
    if total % 10 == 0:
        return "VALID!"
    else:
        return "INVALID!"


# Test examples
if __name__ == "__main__":
    test_cards = [
        "453914889",
        "4111-1111-1111-1111",
        "453914881",
        "1234 5678 9012 3456",
    ]

    for card in test_cards:
        print(f"{card}: {verify_card_number(card)}")
