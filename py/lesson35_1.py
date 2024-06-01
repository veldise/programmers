"""
* [실패율](https://school.programmers.co.kr/learn/courses/30/lessons/42889)
"""


def solution(N, stages):
    stageMap = {}
    clearMap = {}
    for stage in stages:
        for i in range(1, stage + 1):
            if i <= N:
                stageMap[i] = (stageMap.get(i) or 0) + 1
            if i > 1:
                clearMap[i - 1] = (clearMap.get(i - 1) or 0) + 1

    failRateMap = {}
    for i in range(1, N + 1):
        if stageMap.get(i):
            failRateMap[i] = (stageMap[i] - (clearMap.get(i) or 0)) / stageMap[i]
        else:
            failRateMap[i] = 0

    return sorted(failRateMap, key=lambda x: failRateMap[x], reverse=True)


def test():
    test_cases = [
        {"N": 5, "stages": [2, 1, 2, 6, 2, 4, 3, 3], "answer": [3, 4, 2, 1, 5]},
        {"N": 4, "stages": [4, 4, 4, 4, 4], "answer": [4, 1, 2, 3]},
        {"N": 5, "stages": [1, 1, 1, 2, 3, 4], "answer": [4, 1, 3, 2, 5]},
        {"N": 6, "stages": [2, 2, 2, 2, 2, 2, 2, 2, 2], "answer": [2, 1, 3, 4, 5, 6]},
        {"N": 2, "stages": [3], "answer": [1, 2]},
        {"N": 4, "stages": [4, 4, 4, 4, 4], "answer": [4, 1, 2, 3]},
        {"N": 5, "stages": [3, 2, 1, 1], "answer": [3, 1, 2, 4, 5]},
        {"N": 10, "stages": [10, 2], "answer": [10, 2, 1, 3, 4, 5, 6, 7, 8, 9]},
        {"N": 5, "stages": [2, 4], "answer": [4, 2, 1, 3, 5]},
        {"N": 5, "stages": [3, 3, 3, 3, 3], "answer": [3, 1, 2, 4, 5]},
        {"N": 3, "stages": [1, 1, 2, 2], "answer": [2, 1, 3]},
        {"N": 2, "stages": [1, 1, 1, 1], "answer": [1, 2]},
    ]
    for tc in test_cases:
        answer = solution(tc["N"], tc["stages"])
        print(answer == tc["answer"])


test()
