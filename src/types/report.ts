import type { ReportCategory } from "./reportCategort";

export type ReportStatus = "draft" | "published" | "archived";

export interface Report {
  readonly id: number;
  name: string;
  description: string;
  status: ReportStatus;
  createdAt: string;
  lastUpdated?: string;
  category: ReportCategory;
  recordCount?: number;
  isVisible: boolean;
}
