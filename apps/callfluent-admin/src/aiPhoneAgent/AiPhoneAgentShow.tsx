import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { AIPHONEAGENT_TITLE_FIELD } from "./AiPhoneAgentTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const AiPhoneAgentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="active" source="active" />
        <TextField label="conversationHistory" source="conversationHistory" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="language" source="language" />
        <TextField label="name" source="name" />
        <TextField label="responseScript" source="responseScript" />
        <TextField label="speechSettings" source="speechSettings" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Conversation"
          target="aiPhoneAgentId"
          label="Conversations"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
