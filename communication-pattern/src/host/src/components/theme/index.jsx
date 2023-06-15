import { Hub } from 'hub';

export function ThemeSwitch() {

  const { theme } = Hub.useValues();

  console.log(theme);

}