from decimal import *

# email function


def email(fname, lname):
    if not fname.strip() or not lname.strip():
        return "Missing Arguments"
    else:
        return f"{fname}{lname}@evolveu.ca"


# tax calculator
data = {48535: 0.15, 48534: 0.205, 53404: 0.26,
        63895: 0.29, float('inf'): 0.33}


def cantax(income):
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
    tax = Decimal(tax)
    tax = tax.quantize(Decimal('0.000'), rounding=ROUND_UP)
    return float(round(tax, 2))
