import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const SegmentationResultCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="imageReference" source="imageReference" />
        <DateTimeInput label="segmentationDate" source="segmentationDate" />
        <div />
      </SimpleForm>
    </Create>
  );
};
