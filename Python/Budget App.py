class Category:
    def __init__(self, name):
        self.name = name
        self.ledger = []

    def deposit(self, amount, description=""):
        self.ledger.append({"amount": amount, "description": description})

    def withdraw(self, amount, description=""):
        if self.check_funds(amount):
            self.ledger.append({"amount": -amount, "description": description})
            return True
        return False

    def get_balance(self):
        return sum(item["amount"] for item in self.ledger)

    def transfer(self, amount, other_category):
        if self.check_funds(amount):
            self.withdraw(amount, f"Transfer to {other_category.name}")
            other_category.deposit(amount, f"Transfer from {self.name}")
            return True
        return False

    def check_funds(self, amount):
        return amount <= self.get_balance()

    def __str__(self):
        title = f"{self.name:*^30}\n"
        items = ""
        for entry in self.ledger:
            desc = entry["description"][:23].ljust(23)
            amt = f"{entry['amount']:.2f}".rjust(7)
            items += f"{desc}{amt}\n"
        total = f"Total: {self.get_balance():.2f}"
        return title + items + total


def create_spend_chart(categories):
    # Calculate total withdrawals per category
    spent = []
    for cat in categories:
        total = sum(-entry["amount"] for entry in cat.ledger if entry["amount"] < 0)
        spent.append(total)

    total_spent = sum(spent)
    percentages = [int((amount / total_spent) * 100 // 10) * 10 for amount in spent]

    chart = "Percentage spent by category\n"
    for i in range(100, -1, -10):
        line = str(i).rjust(3) + "|"
        for pct in percentages:
            line += " o " if pct >= i else "   "
        line += " "
        chart += line + "\n"

    chart += "    " + "-" * (len(categories) * 3 + 1) + "\n"

    # Determine the max length of category names
    max_len = max(len(cat.name) for cat in categories)
    for i in range(max_len):
        line = "     "
        for cat in categories:
            if i < len(cat.name):
                line += cat.name[i] + "  "
            else:
                line += "   "
        if i < max_len - 1:
            line += "\n"
        chart += line

    return chart
