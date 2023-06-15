import { Hub } from "hub";

export function Toast() {
  const { toast } = Hub.useValues();

  console.log(toast);
}
