import pytest
import syntax

def test_number():
    assert syntax.number(2, 2) == 4

def test_string():
    assert syntax.string() == "Hello"

def test_booleans():
    assert syntax.booleans() == True

def test_list():
    assert syntax.list() == "Rob"

def test_tuple():
    assert syntax.tuple() == "Bob"   

def test_set():
    assert syntax.set() == {"Bob", "Rob", "Rolf"}

def test_dictionary():
    assert syntax.dictionary() == 24

def test_undefined():
    assert syntax.undefined() == None

def test_if_else():
    assert syntax.if_else(13) == "teen"
    assert syntax.if_else(12) == "kid"

def test_function():
    assert syntax.function("Rob") == "Rob"

def test_add_to_front():
    assert syntax.add_to_front() == "Bob"

def test_add_to_back():
    assert syntax.add_to_back() == "Bob"

def test_update_value():
    assert syntax.update_value("Rolf") == "Rolf"

def test_for_loop():
    assert syntax.for_loop() == 50

def test_while_loop():
    assert syntax.while_loop(4) == 1  

def test_look_up_key():
    assert syntax.look_up_key("red") == "color: red" 