import random
from abc import ABC, abstractmethod


class Player(ABC):
    def __init__(self):
        self.moves = []
        self.position = (0, 0)
        self.path = [self.position]

    def make_move(self):
        move = random.choice(self.moves)
        # Update position by adding move coordinates
        new_position = (self.position[0] + move[0], self.position[1] + move[1])
        self.position = new_position
        self.path.append(new_position)
        return new_position

    @abstractmethod
    def level_up(self):
        pass


class Pawn(Player):
    def __init__(self):
        super().__init__()
        # Basic moves: up, down, left, right
        self.moves = [(0, 1), (0, -1), (-1, 0), (1, 0)]

    def level_up(self):
        # Add diagonal moves
        self.moves.extend([(-1, 1), (-1, -1), (1, 1), (1, -1)])
