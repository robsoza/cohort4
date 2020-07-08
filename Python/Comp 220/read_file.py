file = 'D:/Code/cohort4/01-getting-started/src/scripts/syntax.js'
with open(file, 'r') as f:
    f_content = f.read()


def hello():
    return "Hello"


def lines():
    return len(open(file, 'r').readlines())


def chars():
    return len(f_content)


def elses():
    return f_content.count('else')

def close():
    return f.closed