import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { AiPhoneAgentTitle } from "../aiPhoneAgent/AiPhoneAgentTitle";
import { UserTitle } from "../user/UserTitle";

export const ConversationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="aiPhoneAgent.id"
          reference="AiPhoneAgent"
          label="aiPhoneAgent"
        >
          <SelectInput optionText={AiPhoneAgentTitle} />
        </ReferenceInput>
        <DateTimeInput label="endTime" source="endTime" />
        <DateTimeInput label="startTime" source="startTime" />
        <TextInput label="transcript" multiline source="transcript" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
