import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import EmptyComponent from "./components/EmptyComponent";
import TextField from "./components/TextField";
import Chip from "./components/Chip";
import Stack from "./components/StackComponent";
import Card from "./components/Card";
import CardHeader from "./components/CardHeader";
import CardContent from "./components/CardContent";
import Typography from "./components/Typography";
import AddCircleOutlineOutlinedIcon from "./icons/AddCircleIcon";
import AssessmentOutlinedIcon from "./icons/AssessmentIcon";
import FmdGoodOutlinedIcon from "./icons/FmdGoodIcon";
import LocalPhoneOutlinedIcon from "./icons/LocalPhoneIcon";
import DeleteOutlineIcon from "./icons/DeleteIcon";
import IconButton from "./components/IconButton";

export const designSystem = {
  TextField: TextField || EmptyComponent,
  Checkbox: Checkbox || EmptyComponent,
  Button: Button || EmptyComponent,
  Chip: Chip || EmptyComponent,
  Stack: Stack || EmptyComponent,
  Card: Card || EmptyComponent,
  CardHeader: CardHeader || EmptyComponent,
  CardContent: CardContent || EmptyComponent,
  Typography: Typography || EmptyComponent,
  AddCircleIcon: AddCircleOutlineOutlinedIcon || EmptyComponent,
  AssessmentIcon: AssessmentOutlinedIcon || EmptyComponent,
  FmdGoodIcon: FmdGoodOutlinedIcon || EmptyComponent,
  LocalPhoneIcon: LocalPhoneOutlinedIcon || EmptyComponent,
  DeleteIcon: DeleteOutlineIcon || EmptyComponent,
  IconButton: IconButton || EmptyComponent,
};
