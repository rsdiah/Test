import { SortOrder } from "../../util/SortOrder";

export type SegmentationResultOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  imageReference?: SortOrder;
  segmentationDate?: SortOrder;
  segmentedFile?: SortOrder;
  updatedAt?: SortOrder;
};
