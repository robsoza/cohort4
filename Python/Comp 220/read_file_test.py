import pytest
import read_file


def test_hello():
    assert read_file.hello() == "Hello"


def test_lines():
    assert read_file.lines() == 92


def test_chars():
    assert read_file.chars() == 1745


def test_elses():
    assert read_file.elses() == 2

def test_close():
    assert read_file.close() == True