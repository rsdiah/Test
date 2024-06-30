import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ImageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="fileName" source="fileName" />
        <div />
        <DateTimeInput label="uploadDate" source="uploadDate" />
      </SimpleForm>
    </Edit>
  );
};
