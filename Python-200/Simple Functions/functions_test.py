import pytest
import functions

# email function
def test_email():
    assert functions.email("rob", "soza") == "robsoza@evolveu.ca"


# tax calculator
def test_email():
    # first bracket
    assert functions.tax(1) == 0.15
    assert functions.tax(50) == 7.5
    assert functions.tax(20000) == 3000
    assert functions.tax(48535) == 7280
    
    # second bracket
    assert functions.tax(48536) == 7280.205
    assert functions.tax(50000) == 7580.325
    assert functions.tax(80000) == 13730.325
    assert functions.tax(97069) == 17230