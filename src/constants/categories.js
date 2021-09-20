const incomeColors = ['#FF0000', '#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d'];
const expenseColors = ['#8B0000', '#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f', '#ADD8E6'];

export const incomeCategories = [
  { type: 'Mangutang', amount: 0, color: incomeColors[0]},
  { type: 'Business', amount: 0, color: incomeColors[1] },
  { type: 'Investments', amount: 0, color: incomeColors[2] },
  { type: 'Extra income', amount: 0, color: incomeColors[3] },
  { type: 'Deposits', amount: 0, color: incomeColors[4] },
  { type: 'Lottery', amount: 0, color: incomeColors[5] },
  { type: 'Gifts', amount: 0, color: incomeColors[6] },
  { type: 'Salary', amount: 0, color: incomeColors[7] },
  { type: 'Savings', amount: 0, color: incomeColors[8] },
  { type: 'Rental income', amount: 0, color: incomeColors[9] },
];

export const expenseCategories = [
  {type: 'Utang-kay-marites', amount: 0, color: expenseColors[0] },
  { type: 'Bills', amount: 0, color: expenseColors[1] },
  { type: 'Car', amount: 0, color: expenseColors[2] },
  { type: 'Clothes', amount: 0, color: expenseColors[3] },
  { type: 'Travel', amount: 0, color: expenseColors[4] },
  { type: 'Food', amount: 0, color: expenseColors[5] },
  { type: 'Shopping', amount: 0, color: expenseColors[6] },
  { type: 'House', amount: 0, color: expenseColors[7] },
  { type: 'Entertainment', amount: 0, color: expenseColors[8] },
  { type: 'Phone', amount: 0, color: expenseColors[9] },
  { type: 'Pets', amount: 0, color: expenseColors[10] },
  { type: 'Family', amount: 0, color: expenseColors[11] },
  { type: 'Other', amount: 0, color: expenseColors[12] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};