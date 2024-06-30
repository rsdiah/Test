import { JsonValue } from "type-fest";

export type Image = {
  createdAt: Date;
  fileName: string | null;
  id: string;
  imageFile: JsonValue;
  updatedAt: Date;
  uploadDate: Date | null;
};
