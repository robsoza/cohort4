import csv

subscribers_older_than_30_referred_by_google = []

# Read csv
with open('./Census_by_Community_2018.csv', 'r') as Census_by_Community_2018_csv:
    csv_dict_reader = csv.DictReader(Census_by_Community_2018_csv)

    for row in csv_dict_reader:
        print(row)
