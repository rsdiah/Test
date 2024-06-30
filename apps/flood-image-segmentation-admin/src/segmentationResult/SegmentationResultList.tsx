import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SegmentationResultList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SegmentationResults"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="imageReference" source="imageReference" />
        <TextField label="segmentationDate" source="segmentationDate" />
        <TextField label="segmentedFile" source="segmentedFile" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
