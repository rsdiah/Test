import { SortOrder } from "../../util/SortOrder";

export type ImageOrderByInput = {
  createdAt?: SortOrder;
  fileName?: SortOrder;
  id?: SortOrder;
  imageFile?: SortOrder;
  updatedAt?: SortOrder;
  uploadDate?: SortOrder;
};
