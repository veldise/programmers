"""
[2016년](https://school.programmers.co.kr/learn/courses/30/lessons/12901)
"""


def solution(a, b):
    start_week_idx = 5
    week_names = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    month_days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    for i in range(1, a):
        b += month_days[i]
    return week_names[(b + start_week_idx - 1) % len(week_names)]


def test():
    test_cases = [
        {"a": 5, "b": 24, "answer": "TUE"},
        {"a": 1, "b": 1, "answer": "FRI"},
        {"a": 1, "b": 2, "answer": "SAT"},
        {"a": 1, "b": 6, "answer": "WED"},
        {"a": 2, "b": 29, "answer": "MON"},
        {"a": 3, "b": 3, "answer": "THU"},
        {"a": 7, "b": 17, "answer": "SUN"},
        {"a": 10, "b": 22, "answer": "SAT"},
        {"a": 10, "b": 22, "answer": "SAT"},
        {"a": 12, "b": 25, "answer": "SUN"},
    ]
    for tc in test_cases:
        answer = solution(tc["a"], tc["b"])
        print(answer == tc["answer"])


test()
