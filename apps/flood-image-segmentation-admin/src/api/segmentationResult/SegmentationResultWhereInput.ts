import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type SegmentationResultWhereInput = {
  id?: StringFilter;
  imageReference?: StringNullableFilter;
  segmentationDate?: DateTimeNullableFilter;
  segmentedFile?: JsonFilter;
};
