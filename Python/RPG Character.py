full_dot = "●"
empty_dot = "○"


def create_character(name, strength, intelligence, charisma):
    # Name validations (order matters)
    if not isinstance(name, str):
        return "The character name should be a string."
    if name == "":
        return "The character should have a name."
    if len(name) > 10:
        return "The character name is too long."
    if " " in name:
        return "The character name should not contain spaces."

    # Stats validations
    stats = (strength, intelligence, charisma)
    # Must be int (not bool)
    if any(type(s) is not int for s in stats):
        return "All stats should be integers."
    if any(s < 1 for s in stats):
        return "All stats should be no less than 1."
    if any(s > 4 for s in stats):
        return "All stats should be no more than 4."
    if sum(stats) != 7:
        return "The character should start with 7 points."

    # Build stats lines
    def build_line(label, value):
        return f"{label} " + full_dot * value + empty_dot * (10 - value)

    return "\n".join(
        [
            name,
            build_line("STR", strength),
            build_line("INT", intelligence),
            build_line("CHA", charisma),
        ]
    )


print(create_character("ren", 4, 2, 1))
