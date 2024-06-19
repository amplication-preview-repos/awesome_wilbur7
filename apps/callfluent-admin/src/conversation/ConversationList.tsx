import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { AIPHONEAGENT_TITLE_FIELD } from "../aiPhoneAgent/AiPhoneAgentTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ConversationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Conversations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="aiPhoneAgent"
          source="aiphoneagent.id"
          reference="AiPhoneAgent"
        >
          <TextField source={AIPHONEAGENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="endTime" source="endTime" />
        <TextField label="ID" source="id" />
        <TextField label="startTime" source="startTime" />
        <TextField label="transcript" source="transcript" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
