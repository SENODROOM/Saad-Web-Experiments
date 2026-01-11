def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        # Assume the first unsorted element is the minimum
        min_index = i
        # Check the rest of the unsorted elements
        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j
        # Swap only if a smaller element was found
        if min_index != i:
            arr[i], arr[min_index] = arr[min_index], arr[i]
    return arr


# Test examples
if __name__ == "__main__":
    test_cases = [
        [33, 1, 89, 2, 67, 245],
        [5, 16, 99, 12, 567, 23, 15, 72, 3],
        [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92],
    ]

    for case in test_cases:
        print(f"Original: {case}")
        print(f"Sorted:   {selection_sort(case)}\n")
