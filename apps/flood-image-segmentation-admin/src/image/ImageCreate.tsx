import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ImageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="fileName" source="fileName" />
        <div />
        <DateTimeInput label="uploadDate" source="uploadDate" />
      </SimpleForm>
    </Create>
  );
};
