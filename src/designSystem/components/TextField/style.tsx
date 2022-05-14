import { TextField } from "@material-ui/core";
import styled from "styled-components";

export const StyledTextField = styled(TextField)`
  .MuiInputLabel-outlined {
    color: ${({ theme }) => theme?.palette?.primary.contrastText};
  }
  .MuiOutlinedInput-root {
    background: #ffffff;
  }
  .MuiInputLabel-outlined.MuiInputLabel-shrink {
    color: #000000;
  }
`;
