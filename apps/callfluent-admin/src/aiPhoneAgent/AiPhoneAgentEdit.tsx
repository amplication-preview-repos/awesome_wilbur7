import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ConversationTitle } from "../conversation/ConversationTitle";

export const AiPhoneAgentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="active" source="active" />
        <TextInput
          label="conversationHistory"
          multiline
          source="conversationHistory"
        />
        <ReferenceArrayInput
          source="conversations"
          reference="Conversation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ConversationTitle} />
        </ReferenceArrayInput>
        <TextInput label="language" source="language" />
        <TextInput label="name" source="name" />
        <TextInput label="responseScript" multiline source="responseScript" />
        <TextInput label="speechSettings" multiline source="speechSettings" />
      </SimpleForm>
    </Edit>
  );
};
