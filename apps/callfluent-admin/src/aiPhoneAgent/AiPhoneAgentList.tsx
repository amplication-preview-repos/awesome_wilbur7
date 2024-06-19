import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const AiPhoneAgentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AIPhoneAgents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField label="active" source="active" />
        <TextField label="conversationHistory" source="conversationHistory" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="language" source="language" />
        <TextField label="name" source="name" />
        <TextField label="responseScript" source="responseScript" />
        <TextField label="speechSettings" source="speechSettings" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
