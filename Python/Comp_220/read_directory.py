import os


def hello():
    return "Hello"

def files():
    f_count = len(os.listdir('.'))
    f_name = os.getcwd()
    f_size = os.path.getsize('.')
    return f'There are {f_count} files in {f_name} with total size of {f_size} bites'