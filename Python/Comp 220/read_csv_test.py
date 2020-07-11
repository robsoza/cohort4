import pytest
import read_csv


def test_read_census():
    assert read_csv.read_census() == {'lines': 303, 'class': {'Residential': 1263734, 'Industrial': 922, 'Major Park': 0, 'Residual Sub Area': 0}, 'sector': {
        'CENTRE': 199977, 'SOUTH': 227345, 'NORTHEAST': 185534, 'NORTHWEST': 174126, 'NORTH': 160502, 'SOUTHEAST': 135009, 'EAST': 57666, 'WEST': 124497}}
