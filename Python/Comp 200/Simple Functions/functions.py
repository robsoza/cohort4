# email function
def email(fname, lname):
    return f"{fname}{lname}@evolveu.ca"


# tax calculator
data = {48535: 0.15, 48534: 0.205, 53404: 0.26,
        63895: 0.29, float('inf'): 0.33}

def tax(income):
    tax = 0
    if type(income) is str or income == None:
        return 0
    for bracket, rate in data.items():
        if income >= bracket:
            tax += (bracket * rate)
        else:
            if income > 0:
                tax += (income * rate)
        income -= bracket
    return round(tax, 2)
