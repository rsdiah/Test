import { SegmentationResultWhereInput } from "./SegmentationResultWhereInput";
import { SegmentationResultOrderByInput } from "./SegmentationResultOrderByInput";

export type SegmentationResultFindManyArgs = {
  where?: SegmentationResultWhereInput;
  orderBy?: Array<SegmentationResultOrderByInput>;
  skip?: number;
  take?: number;
};
