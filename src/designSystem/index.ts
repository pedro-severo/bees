import EmptyComponent from "./components/EmptyComponent";
import TextField from "./components/TextField";

export const designSystem = {
  TextField: TextField || EmptyComponent,
};
