import { JsonValue } from "type-fest";

export type SegmentationResult = {
  createdAt: Date;
  id: string;
  imageReference: string | null;
  segmentationDate: Date | null;
  segmentedFile: JsonValue;
  updatedAt: Date;
};
