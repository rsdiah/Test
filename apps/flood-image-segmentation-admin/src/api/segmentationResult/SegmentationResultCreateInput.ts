import { InputJsonValue } from "../../types";

export type SegmentationResultCreateInput = {
  imageReference?: string | null;
  segmentationDate?: Date | null;
  segmentedFile?: InputJsonValue;
};
