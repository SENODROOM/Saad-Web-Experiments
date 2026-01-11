def quick_sort(arr):
    # Base case: empty list or single element list is already sorted
    if len(arr) <= 1:
        return arr.copy()  # return a copy to avoid modifying the original list

    # Choose pivot (here we take the first element)
    pivot = arr[0]

    # Partition into three sublists
    less = [x for x in arr if x < pivot]
    equal = [x for x in arr if x == pivot]
    greater = [x for x in arr if x > pivot]

    # Recursively sort less and greater, then concatenate
    return quick_sort(less) + equal + quick_sort(greater)


# Test examples
if __name__ == "__main__":
    test_cases = [
        [],
        [20, 3, 14, 1, 5],
        [83, 4, 24, 2],
        [4, 42, 16, 23, 15, 8],
        [87, 11, 23, 18, 18, 23, 11, 56, 87, 56],
    ]

    for case in test_cases:
        print(f"Original: {case}")
        print(f"Sorted:   {quick_sort(case)}\n")
