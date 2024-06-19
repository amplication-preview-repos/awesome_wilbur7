import { Billing as TBilling } from "../api/billing/Billing";

export const BILLING_TITLE_FIELD = "id";

export const BillingTitle = (record: TBilling): string => {
  return record.id?.toString() || String(record.id);
};
