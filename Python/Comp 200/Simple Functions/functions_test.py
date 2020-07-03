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
    assert functions.tax(48535) == 7280.25
    
    # second bracket
    assert functions.tax(48536) == 7280.45
    assert functions.tax(50000) == 7580.57
    assert functions.tax(80000) == 13730.58
    assert functions.tax(97069) == 17229.72
    
    # third bracket
    assert functions.tax(97070) == 17229.98
    assert functions.tax(100000) == 17991.78
    assert functions.tax(120000) == 23191.78
    assert functions.tax(150473) == 31114.76
    
    # fourth bracket
    assert functions.tax(150474) == 31115.05
    assert functions.tax(175000) == 38227.59
    assert functions.tax(200000) == 45477.59
    assert functions.tax(214368) == 49644.31
    
    # fith bracket
    assert functions.tax(214369) == 49644.64
    assert functions.tax(250000) == 61402.87
    assert functions.tax(300000) == 77902.87
    assert functions.tax(10000000) == 3278902.87
    
    # random things
    assert functions.tax(-1) == 0
    assert functions.tax("apples") == 0
    assert functions.tax(None) == 0