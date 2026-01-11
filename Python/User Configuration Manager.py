# Dictionary to store user settings
test_settings = {"theme": "light", "language": "english", "notifications": "enabled"}


# Function to add a new setting
def add_setting(settings, key_value):
    key, value = key_value
    key = key.lower()
    value = value.lower()

    if key in settings:
        return (
            f"Setting '{key}' already exists! Cannot add a new setting with this name."
        )
    else:
        settings[key] = value
        return f"Setting '{key}' added with value '{value}' successfully!"


# Function to update an existing setting
def update_setting(settings, key_value):
    key, value = key_value
    key = key.lower()
    value = value.lower()

    if key in settings:
        settings[key] = value
        return f"Setting '{key}' updated to '{value}' successfully!"
    else:
        return f"Setting '{key}' does not exist! Cannot update a non-existing setting."


# Function to delete a setting
def delete_setting(settings, key):
    key = key.lower()

    if key in settings:
        del settings[key]
        return f"Setting '{key}' deleted successfully!"
    else:
        return "Setting not found!"


# Function to view all settings
def view_settings(settings):
    if not settings:
        return "No settings available."

    result = ["Current User Settings:"]
    for key, value in settings.items():
        result.append(f"{key.capitalize()}: {value}")

    return "\n".join(result) + "\n"
