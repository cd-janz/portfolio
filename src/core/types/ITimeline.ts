export type TimelineItemType = "degree" | "course" | "bootcamp" | "certification" | "work" | "freelancer";
export default interface ITimelineItem {
  title: string;
  subtitle: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  type: TimelineItemType;
  achievements?: string[];
  technologies?: string[];
}
