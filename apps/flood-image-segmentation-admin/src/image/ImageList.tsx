import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ImageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Images"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="fileName" source="fileName" />
        <TextField label="ID" source="id" />
        <TextField label="imageFile" source="imageFile" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="uploadDate" source="uploadDate" />
      </Datagrid>
    </List>
  );
};
