import { InputJsonValue } from "../../types";

export type ImageUpdateInput = {
  fileName?: string | null;
  imageFile?: InputJsonValue;
  uploadDate?: Date | null;
};
