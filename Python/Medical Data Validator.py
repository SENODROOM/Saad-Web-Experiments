import re

medical_records = [
    {
        "patient_id": "P1001",
        "age": 34,
        "gender": "Female",
        "diagnosis": "Hypertension",
        "medications": ["Lisinopril"],
        "last_visit_id": "V2301",
    },
    {
        "patient_id": "p1002",
        "age": 47,
        "gender": "male",
        "diagnosis": "Type 2 Diabetes",
        "medications": ["Metformin", "Insulin"],
        "last_visit_id": "v2302",
    },
    {
        "patient_id": "P1003",
        "age": 29,
        "gender": "female",
        "diagnosis": "Asthma",
        "medications": ["Albuterol"],
        "last_visit_id": "v2303",
    },
    {
        "patient_id": "p1004",
        "age": 56,
        "gender": "Male",
        "diagnosis": "Chronic Back Pain",
        "medications": ["Ibuprofen", "Physical Therapy"],
        "last_visit_id": "V2304",
    },
]


def find_invalid_records(
    patient_id, age, gender, diagnosis, medications, last_visit_id
):
    constraints = {
        "patient_id": isinstance(patient_id, str)
        and re.fullmatch(r"p\d+", patient_id, re.IGNORECASE),
        "age": isinstance(age, int) and age >= 18,
        "gender": isinstance(gender, str) and gender.lower() in ("male", "female"),
        "diagnosis": isinstance(diagnosis, str) or diagnosis is None,
        "medications": isinstance(medications, list)
        and all(isinstance(i, str) for i in medications),
        "last_visit_id": isinstance(last_visit_id, str)
        and re.fullmatch(r"v\d+", last_visit_id, re.IGNORECASE),
    }
    # Return list of invalid keys
    return [key for key, valid in constraints.items() if not valid]


def validate(data):
    if not isinstance(data, (list, tuple)):
        print("Invalid format: expected a list or tuple.")
        return False

    key_set = {
        "patient_id",
        "age",
        "gender",
        "diagnosis",
        "medications",
        "last_visit_id",
    }
    is_invalid = False

    for index, record in enumerate(data):
        if not isinstance(record, dict):
            print(f"Invalid format: expected a dictionary at position {index}.")
            is_invalid = True
            continue

        if set(record.keys()) != key_set:
            print(
                f"Invalid format: {record} at position {index} has missing and/or invalid keys."
            )
            is_invalid = True
            continue

        # Get invalid fields
        invalid_records = find_invalid_records(**record)

        # FOR LOOP: Iterate over invalid_records and print them
        for key in invalid_records:
            print(f"Unexpected format '{key}: {record[key]}' at position {index}.")
            is_invalid = True

    if is_invalid:
        return False

    print("Valid format.")
    return True


# Run validation
validate(medical_records)
