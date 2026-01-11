def dfs_n_queens(n):
    if n < 1:
        return []

    solutions = []

    # Helper function to check if a queen can be placed at (row, col)
    def is_safe(board, row, col):
        for r in range(row):
            c = board[r]
            # Check same column or diagonals
            if c == col or abs(c - col) == abs(r - row):
                return False
        return True

    # Recursive DFS function to place queens row by row
    def place_queen(board, row):
        if row == n:
            solutions.append(board.copy())  # Found valid solution
            return
        for col in range(n):
            if is_safe(board, row, col):
                board[row] = col
                place_queen(board, row + 1)
                # No need to unset board[row] because it will be overwritten in next iteration

    place_queen([0] * n, 0)
    return solutions


# Test cases
print(dfs_n_queens(1))  # [[0]]
print(dfs_n_queens(2))  # []
print(dfs_n_queens(3))  # []
print(dfs_n_queens(4))  # [[1, 3, 0, 2], [2, 0, 3, 1]]
print(dfs_n_queens(5))  # 10 solutions
print(len(dfs_n_queens(5)))  # 10
print(len(dfs_n_queens(8)))  # 92
