def hanoi_solver(n):
    # Initialize rods
    source = list(range(n, 0, -1))  # [n, n-1, ..., 1]
    auxiliary = []
    target = []

    # To store the moves as strings
    moves = []

    # Helper function to record the current state
    def record_state():
        moves.append(f"{source} {auxiliary} {target}")

    # Recursive Hanoi function
    def move_disks(num, src, aux, tgt):
        if num == 0:
            return
        # Move n-1 disks from src to aux using tgt as auxiliary
        move_disks(num - 1, src, tgt, aux)
        # Move the last disk from src to tgt
        disk = src.pop()
        tgt.append(disk)
        record_state()
        # Move the n-1 disks from aux to tgt using src as auxiliary
        move_disks(num - 1, aux, src, tgt)

    # Record initial state
    record_state()
    # Solve the puzzle
    move_disks(n, source, auxiliary, target)

    # Return all moves as a single string separated by newlines
    return "\n".join(moves)


# Example:
print(hanoi_solver(3))
