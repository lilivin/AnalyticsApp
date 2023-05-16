import yearlyIncomes from "../data/yearlyIncomes.json";
import visitorsPerYear from "../data/visitorsPerYear.json";

export interface LineChartData {
    [key: string]: string | number;
    line1: number;
    line2: number;
  }
  

export function getYearlyIncomesData() {
  return yearlyIncomes.data;
}

export function getVisitorsPerYearData() {
    return visitorsPerYear.data;
  }
