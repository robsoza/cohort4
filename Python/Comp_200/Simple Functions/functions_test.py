import pytest
import functions

# email function


def test_email():
    assert functions.email("", "") == "Missing Arguments"
    assert functions.email("rob", "soza") == "robsoza@evolveu.ca"


# tax calculator
def test_cantax():
    # first bracket
    assert functions.cantax(1) == 0.15
    assert functions.cantax(50) == 7.50
    assert functions.cantax(20000) == 3000
    assert functions.cantax(48535) == 7280.25

    # second bracket
    assert functions.cantax(48536) == 7280.46
    assert functions.cantax(50000) == 7580.58
    assert functions.cantax(80000) == 13730.58
    assert functions.cantax(97069) == 17229.72

    # third bracket
    assert functions.cantax(97070) == 17229.98
    assert functions.cantax(100000) == 17991.78
    assert functions.cantax(120000) == 23191.78
    assert functions.cantax(150473) == 31114.76

    # fourth bracket
    assert functions.cantax(150474) == 31115.05
    assert functions.cantax(175000) == 38227.59
    assert functions.cantax(200000) == 45477.59
    assert functions.cantax(214368) == 49644.31

    # fith bracket
    assert functions.cantax(214369) == 49644.64
    assert functions.cantax(250000) == 61402.87
    assert functions.cantax(300000) == 77902.87
    assert functions.cantax(10000000) == 3278902.87

    # random things
    assert functions.cantax(-1) == 0
    assert functions.cantax("apples") == 0
    assert functions.cantax(None) == 0
