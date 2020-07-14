import pytest
import write_invoice


def test_write_invoice():
    assert write_invoice.invoice(1) == 'Printed inv_No 1'