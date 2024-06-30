import { InputJsonValue } from "../../types";

export type SegmentationResultUpdateInput = {
  imageReference?: string | null;
  segmentationDate?: Date | null;
  segmentedFile?: InputJsonValue;
};
