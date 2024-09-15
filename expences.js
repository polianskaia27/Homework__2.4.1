let yearlyExpences = [
  1500, 100, 390, 80000, 1980, 90, 15010, 1400, 300, 290, 4000, 1250,
];

function sum(yearlyExpences) {
  let sumOfYearlyExpences = 0;
  for (j = 0; j < yearlyExpences.length; j++) {
    if (yearlyExpences[j] > 1000) {
      sumOfYearlyExpences += yearlyExpences[j];
    }
  }
  return sumOfYearlyExpences;
}

console.log(sum(yearlyExpences));

let expencesExamples = [
  {
    yearlyExpences: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpences: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpences: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

testData = [40590, 148200, 25709];

testData.forEach((value, index) => {
  if (sum(expencesExamples[index].yearlyExpences) === value) {
    console.log(
      `Результат выполнения функции ${sum(
        expencesExamples[index].yearlyExpences
      )} для года с индексом ${index} равен расчетному ${value}.`
    );
  }
});
