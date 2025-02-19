import { randomNumber } from "../utils";
import { categories } from "./f1";

export function createCategories() {
  let categoriesRow: string[] = [];
  let categoriesColumn: string[] = [];

  const keys = Object.keys(categories);
  const usedKeys: number[] = [];

  function createCategoriesRow() {
    categoriesRow = [];
    categoriesColumn = [];
    usedKeys.splice(0, 6);
    for (let i = 0; i < 3; i++) {
      let rand = randomNumber(0, keys.length);
      while (usedKeys.includes(rand) || keys[rand].length > 10) {
        rand = randomNumber(0, keys.length);
      }

      usedKeys.push(rand);
      categoriesRow.push(keys[rand]);
    }
  }

  createCategoriesRow();

  let testedCategories = 0;
  while (categoriesColumn.length < 3) {
    let approved = 0;
    let rand = randomNumber(0, keys.length);

    while (usedKeys.includes(rand)) {
      rand = randomNumber(0, keys.length);
    }

    for (let i = 0; i < 3; i++) {
      const categoryRow = new Set(categories[categoriesRow[i]]);
      const categoryColumn = categories[keys[rand]];
      const common = categoryColumn.some((driver) => categoryRow.has(driver));

      if (common) {
        approved += 1;
      }
    }

    if (approved === 3) {
      usedKeys.push(rand);
      categoriesColumn.push(keys[rand]);
    } else if (testedCategories > 3000) {
      testedCategories = 0;
      createCategoriesRow();
    }
    testedCategories += 1;
  }

  return [categoriesRow, categoriesColumn];
}
