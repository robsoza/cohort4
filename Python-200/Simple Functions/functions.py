# email function
def email(fname, lname):
    return f"{fname}{lname}@evolveu.ca"


# tax calculator
def tax(income):
    totalTax = 0
    taxBrackets = [
        {"bracket": 48535, "rate": .15, "max": 7280},
        {"bracket": 48534, "rate": .205, "max": 9950},
        {"bracket": 53404, "rate": .26, "max": 13885},
        {"bracket": 63895, "rate": .29, "max": 18530},
        {"bracket": float('inf'), "rate": .33, "max": 0}
    ]
    for bracket in taxBrackets:
        if income >= bracket["bracket"]:
            totalTax += bracket["max"]
        else:
            if income > 0:
                totalTax += income * bracket["rate"]
        
        income -= bracket["bracket"]
    return totalTax
