import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PlanList } from "./plan/PlanList";
import { PlanCreate } from "./plan/PlanCreate";
import { PlanEdit } from "./plan/PlanEdit";
import { PlanShow } from "./plan/PlanShow";
import { SubscriptionList } from "./subscription/SubscriptionList";
import { SubscriptionCreate } from "./subscription/SubscriptionCreate";
import { SubscriptionEdit } from "./subscription/SubscriptionEdit";
import { SubscriptionShow } from "./subscription/SubscriptionShow";
import { AiPhoneAgentList } from "./aiPhoneAgent/AiPhoneAgentList";
import { AiPhoneAgentCreate } from "./aiPhoneAgent/AiPhoneAgentCreate";
import { AiPhoneAgentEdit } from "./aiPhoneAgent/AiPhoneAgentEdit";
import { AiPhoneAgentShow } from "./aiPhoneAgent/AiPhoneAgentShow";
import { BillingList } from "./billing/BillingList";
import { BillingCreate } from "./billing/BillingCreate";
import { BillingEdit } from "./billing/BillingEdit";
import { BillingShow } from "./billing/BillingShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ConversationList } from "./conversation/ConversationList";
import { ConversationCreate } from "./conversation/ConversationCreate";
import { ConversationEdit } from "./conversation/ConversationEdit";
import { ConversationShow } from "./conversation/ConversationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"callfluent"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Plan"
          list={PlanList}
          edit={PlanEdit}
          create={PlanCreate}
          show={PlanShow}
        />
        <Resource
          name="Subscription"
          list={SubscriptionList}
          edit={SubscriptionEdit}
          create={SubscriptionCreate}
          show={SubscriptionShow}
        />
        <Resource
          name="AiPhoneAgent"
          list={AiPhoneAgentList}
          edit={AiPhoneAgentEdit}
          create={AiPhoneAgentCreate}
          show={AiPhoneAgentShow}
        />
        <Resource
          name="Billing"
          list={BillingList}
          edit={BillingEdit}
          create={BillingCreate}
          show={BillingShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Conversation"
          list={ConversationList}
          edit={ConversationEdit}
          create={ConversationCreate}
          show={ConversationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
