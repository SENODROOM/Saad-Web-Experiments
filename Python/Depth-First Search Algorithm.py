def dfs(adj_matrix, start):
    n = len(adj_matrix)
    # basic validation
    if not isinstance(adj_matrix, list) or n == 0:
        return []
    if not (0 <= start < n):
        return []

    visited = []

    def visit(node):
        if node in visited:
            return
        visited.append(node)
        # iterate neighbors from highest index down to 0 so higher-numbered neighbors are explored first
        for neighbor in range(n - 1, -1, -1):
            if adj_matrix[node][neighbor] == 1 and neighbor not in visited:
                visit(neighbor)

    visit(start)
    return visited


# Test cases (expected results shown in comments)
print(
    dfs([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]], 1)
)  # -> [1, 2, 3, 0]

print(
    dfs([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]], 3)
)  # -> [3, 2, 1, 0]

print(dfs([[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]], 3))  # -> [3, 2]

print(dfs([[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]], 0))  # -> [0, 1]

print(dfs([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]], 3))  # -> [3]
