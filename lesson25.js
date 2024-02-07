/**
 * 광물 캐기: https://school.programmers.co.kr/learn/courses/30/lessons/172927
 */
function solution(picks, minerals) {
  const fatigueMap = {
    dia: { diamond: 1, iron: 1, stone: 1 },
    iron: { diamond: 5, iron: 1, stone: 1 },
    stone: { diamond: 25, iron: 5, stone: 1 }
  };
  let fatigue = 0;
  let currPick = null;
  let cntUsedPick = 5;

  let [dia, iron, stone] = picks;

  for (const mineral of minerals) {
    // if (!dia && !iron && !stone) {
    //   break;
    // }
    if (!currPick) {
      if (dia) {
        currPick = "dia";
        dia--;
      } else if (iron) {
        currPick = "iron";
        iron--;
      } else if (stone) {
        currPick = "stone";
        stone--;
      } else {
        break;
      }
    }

    fatigue += fatigueMap[currPick][mineral] || 0;
    console.log(currPick, mineral, fatigue);

    if (!--cntUsedPick) {
      cntUsedPick = 5;
      currPick = null;
    }
  }

  return fatigue;
}

function solutionOther(picks, minerals) {
  var answer = 0;
  return answer;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    {
      picks: [1, 3, 2],
      minerals: ["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone"],
      result: 12
    },
    {
      picks: [0, 1, 1],
      minerals: [
        "diamond",
        "diamond",
        "diamond",
        "diamond",
        "diamond",
        "iron",
        "iron",
        "iron",
        "iron",
        "iron",
        "diamond"
      ],
      result: 50
    }
  ];

  const success = testCases.every((tc) => {
    console.log(solution(tc.picks, tc.minerals), tc.result);
    return require("lodash").isEqual(solution(tc.picks, tc.minerals), tc.result);
  });
  console.log(success);
}

module.exports = solution;
