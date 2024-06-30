import { SegmentationResult as TSegmentationResult } from "../api/segmentationResult/SegmentationResult";

export const SEGMENTATIONRESULT_TITLE_FIELD = "imageReference";

export const SegmentationResultTitle = (
  record: TSegmentationResult
): string => {
  return record.imageReference?.toString() || String(record.id);
};
