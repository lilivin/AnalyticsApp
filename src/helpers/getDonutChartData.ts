import visitorsAnalytics from "../data/visitorsAnalytics.json";

export type DonutChartData = {
  label: string;
  value: number;
};

export function getVisitorsAnalyticsData() {
  return visitorsAnalytics.data;
}
