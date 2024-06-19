import { Module } from "@nestjs/common";
import { PlanModule } from "./plan/plan.module";
import { SubscriptionModule } from "./subscription/subscription.module";
import { AiPhoneAgentModule } from "./aiPhoneAgent/aiPhoneAgent.module";
import { BillingModule } from "./billing/billing.module";
import { UserModule } from "./user/user.module";
import { ConversationModule } from "./conversation/conversation.module";
import { MailWizzIntegrationModule } from "./MailWizzIntegration/mailwizzintegration.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    PlanModule,
    SubscriptionModule,
    AiPhoneAgentModule,
    BillingModule,
    UserModule,
    ConversationModule,
    MailWizzIntegrationModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
