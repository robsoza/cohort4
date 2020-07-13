import pytest
import invoice_tracker


def test_read_invoice():
    assert invoice_tracker.read_invoice() == 1
