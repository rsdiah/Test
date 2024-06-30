import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const SegmentationResultEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="imageReference" source="imageReference" />
        <DateTimeInput label="segmentationDate" source="segmentationDate" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
