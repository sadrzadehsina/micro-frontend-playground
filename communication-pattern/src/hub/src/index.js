import { useTheme } from "./theme"


export function useHubActions() {

  const { setTheme } = useTheme();

  const { showToast } = useToast();

  return {
    setTheme,
    showToast
  }

}

export function useHubValues() {

  const { theme } = useTheme();
  const { toast } = useToast();

  return {
    theme,
    toast,
  }

}
