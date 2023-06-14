import { useHubValues } from 'hub';

export function ThemeSwitch() {

  const { theme } = useHubValues();

  console.log(theme);

}