# define attributes / variables
# number
# string
# boolean
# array
# dictionary / objects
# undefined
# sample if / else
# functions
# parameters
# returns
# arrays
# add to the front
# add to the end
# update values
# loops
# for
# for/in
# while
# do while
# forEach (with array and function)
# Objects / Dictionaries
# declare object
# lookup key to retrieve the value


def number(num1: int, num2: int):
    return num1 + num2


def string():
    return str("Hello")


def booleans():
    return 5 == 5


def list():
    l = ["Rob", "Bob"]
    return l[0]


def tuple():
    t = ("Rob", "Bob")
    return t[1]


def set():
    s = {"Bob", "Rob"}
    s2 = {"Bob", "Rolf"}
    return s.union(s2)


def dictionary():
    f = {"Rob": 24, "Rolf": 30}
    return f["Rob"]


def undefined():
    return None


def if_else(num):
    if num > 12:
        return "teen"
    else:
        return "kid"


def function(f):
    friends = []
    friends.append(f)
    return friends[0]


def add_to_front():
    l = ["Rob", "Bob"]
    l.insert(0, "Bob")
    return l[0]


def add_to_back():
    l = ["Rob", "Bob"]
    l.append("Bob")
    return l[len(l)-1]


def update_value(str):
    l = ["Rob", ]
    l[0] = str
    return l[0]


def for_loop():
    grades = [20, 30]
    total = 0
    for grade in grades:
        total += grade
    return total


def while_loop(x):
    while x > 1:
        x -= 1
    return x


def look_up_key(x):
    my_dict = {"color": "red", "x": 10}
    for key, value in my_dict.items():
        if x == "red":
            return f"{key}: {value}"


def defaultdict():
    code = 'myPython'
    d = {}
    for c in code:
        if c not in d:
            d[c] = 1
        else:
            d[c] += 1
    return d
