import { InputJsonValue } from "../../types";

export type ImageCreateInput = {
  fileName?: string | null;
  imageFile?: InputJsonValue;
  uploadDate?: Date | null;
};
