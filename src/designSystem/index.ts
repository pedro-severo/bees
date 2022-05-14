import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import EmptyComponent from "./components/EmptyComponent";
import TextField from "./components/TextField";

export const designSystem = {
  TextField: TextField || EmptyComponent,
  Checkbox: Checkbox || EmptyComponent,
  Button: Button || EmptyComponent,
};
