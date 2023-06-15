import { useTheme } from "./theme";
import { useToast } from "./toast";

const commands = {
  setTheme: useTheme.getState().setTheme,
  showToast: useToast.getState().showToast,
};

export const Hub = {
  runCommand: (command, payload) => commands[command](payload),
  useValues,
};

function useValues() {
  const { theme } = useTheme();
  const { toast } = useToast();

  return {
    theme,
    toast,
  };
}
