import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ImageWhereInput = {
  fileName?: StringNullableFilter;
  id?: StringFilter;
  imageFile?: JsonFilter;
  uploadDate?: DateTimeNullableFilter;
};
