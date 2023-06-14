import { useHubValues } from 'hub';

export function Toast() {

  const { toast } = useHubValues();

  console.log(toast);

}