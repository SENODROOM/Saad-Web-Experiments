from abc import ABC, abstractmethod
from typing import List


# Product class
class Product:
    def __init__(self, name: str, price: float) -> None:
        self.name = name
        self.price = price

    def __str__(self) -> str:
        return f"{self.name} - ${self.price:.2f}"


# Abstract base class for discount strategies
class DiscountStrategy(ABC):
    @abstractmethod
    def is_applicable(self, product: Product, user_tier: str) -> bool:
        pass

    @abstractmethod
    def apply_discount(self, product: Product) -> float:
        pass


# Percentage-based discount
class PercentageDiscount(DiscountStrategy):
    def __init__(self, percent: int) -> None:
        self.percent = percent

    def is_applicable(self, product: Product, user_tier: str) -> bool:
        # Limit the discount to 70% max
        return self.percent <= 70

    def apply_discount(self, product: Product) -> float:
        return product.price * (1 - self.percent / 100)


# Fixed amount discount
class FixedAmountDiscount(DiscountStrategy):
    def __init__(self, amount: float) -> None:
        self.amount = amount

    def is_applicable(self, product: Product, user_tier: str) -> bool:
        # Only applicable if discount is less than 90% of price
        return product.price * 0.9 > self.amount

    def apply_discount(self, product: Product) -> float:
        return product.price - self.amount


# Premium user discount
class PremiumUserDiscount(DiscountStrategy):
    def is_applicable(self, product: Product, user_tier: str) -> bool:
        return user_tier.lower() == "premium"

    def apply_discount(self, product: Product) -> float:
        return product.price * 0.8


# Discount engine to calculate the best price
class DiscountEngine:
    def __init__(self, strategies: List[DiscountStrategy]) -> None:
        self.strategies = strategies

    def calculate_best_price(self, product: Product, user_tier: str) -> float:
        prices = [product.price]  # start with original price

        for strategy in self.strategies:
            if strategy.is_applicable(product, user_tier):
                discounted_price = strategy.apply_discount(product)
                prices.append(discounted_price)

        return min(prices)  # return the lowest price


# Main program
if __name__ == "__main__":
    product = Product("Wireless Mouse", 50.0)
    user_tier = "Premium"

    strategies = [PercentageDiscount(10), FixedAmountDiscount(5), PremiumUserDiscount()]

    engine = DiscountEngine(strategies)
    best_price = engine.calculate_best_price(product, user_tier)

    # Final output
    print(f"Best price for {product.name} for {user_tier} user: ${best_price:.2f}")
