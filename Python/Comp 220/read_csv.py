import csv
import json
r_file = 'D:/Code/cohort4/Python/Comp 220/Census_by_Community_2018.csv'
w_file = 'D:/Code/cohort4/Python/Comp 220/report.txt'


def read_census():
    with open(r_file, 'r') as csv_file:
        csv_content = csv.reader(csv_file)
        head = next(csv_content)  # The first line is the header
        d = {'lines': 0, 'class': {}, 'sector': {}}
        for x in csv_content:
            d['lines'] += 1

            d['class'][x[head.index('CLASS')]] = d['class'].get(
                x[head.index('CLASS')], 0) + int(x[head.index('RES_CNT')])

            d['sector'][x[head.index('SECTOR')]] = d['sector'].get(
                x[head.index('SECTOR')], 0) + int(x[head.index('RES_CNT')])
        write_report(d)
        return(d)


def write_report(d):
    with open(w_file, 'w') as report:

        report.write("*** Census_by_Community_2018 ***\n")
        report.write(f'Total Rows = {d["lines"]}')

        report.write("\n====================\n")
        report.write("*** CLASS DATA ***\n")
        report.write(f'By Class Total : {sum(d["class"].values())}')
        report.write(json.dumps(d["class"], indent=4, sort_keys=True)[1:-1])

        report.write("\n====================\n")
        report.write("*** SECTOR DATA ***\n")
        report.write(f'By Sector Total : {sum(d["sector"].values())}')
        report.write(json.dumps(d["sector"], indent=4, sort_keys=True)[1:-1])
    return report


read_census()
