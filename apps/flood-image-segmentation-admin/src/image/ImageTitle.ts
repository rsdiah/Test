import { Image as TImage } from "../api/image/Image";

export const IMAGE_TITLE_FIELD = "fileName";

export const ImageTitle = (record: TImage): string => {
  return record.fileName?.toString() || String(record.id);
};
