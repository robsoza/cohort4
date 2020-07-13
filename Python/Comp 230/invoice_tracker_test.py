import pytest
import invoice_tracker


def test_read_invoice():
    d = invoice_tracker.read_datasheet()

    assert d['Customers'][1] == {'customer_id': 1, 'f_name': 'Wilbert', 'l_name': 'Toor', 'phone': '457-218-5978','email': 'wtoor0@rambler.ru', 'street': '9844 Eastlawn Point', 'city': 'Waihibar', 'zipcode': 32179}

    assert d['Invoices'][1] == {'invoice_no': 1, 'customer_id': 1, 'invoice_date': '2020-03-02', 'payment_method': 'Cash', 'total_price': 470}
    
    assert d['Invoice Line Items'][1] == {'line_id': 1, 'invoice_no': 1, 'product_id': 130, 'quantity': 13, 'price': 260, 'invoice_date': '2020-03-02'}
    
    assert d['Product'][1] == {'product_id': 100, 'name': 'Candles', 'description': 'Strawberry scented candle', 'quantity': 86, 'cost': 5.5}