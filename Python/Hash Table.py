class HashTable:
    def __init__(self):
        self.collection = {}

    def hash(self, string):
        total = 0
        for char in string:
            total += ord(char)
        return total

    def add(self, key, value):
        hashed_key = self.hash(key)

        if hashed_key not in self.collection:
            self.collection[hashed_key] = {}

        self.collection[hashed_key][key] = value

    def remove(self, key):
        hashed_key = self.hash(key)

        if hashed_key in self.collection:
            if key in self.collection[hashed_key]:
                del self.collection[hashed_key][key]

                if len(self.collection[hashed_key]) == 0:
                    del self.collection[hashed_key]

    def lookup(self, key):
        hashed_key = self.hash(key)

        if hashed_key in self.collection:
            if key in self.collection[hashed_key]:
                return self.collection[hashed_key][key]

        return None
