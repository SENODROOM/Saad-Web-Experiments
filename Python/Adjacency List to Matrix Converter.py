def adjacency_list_to_matrix(adj_list):
    n = len(adj_list)  # Number of nodes
    matrix = [
        [0 for _ in range(n)] for _ in range(n)
    ]  # Initialize n x n matrix with 0s

    # Fill matrix based on adjacency list
    for node, neighbors in adj_list.items():
        for neighbor in neighbors:
            matrix[node][neighbor] = 1

    # Print each row
    for row in matrix:
        print(row)

    return matrix


# Example usage
adjacency_list_to_matrix({0: [1, 2], 1: [2], 2: [0, 3], 3: [2]})
