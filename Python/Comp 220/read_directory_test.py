import pytest
import read_directory


def test_hello():
    assert read_directory.hello() == "Hello"


def test_files():
    assert read_directory.files(
    ) == 'There are 7 files in D:\Code\cohort4\Python with total size of 4096 bites'
