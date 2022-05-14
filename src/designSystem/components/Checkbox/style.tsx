import { FormControlLabel } from "@material-ui/core";
import styled from "styled-components";

export const StyledFormControl = styled(FormControlLabel)`
  align-self: center;
  .MuiTypography-body1 {
    color: ${({ theme }) => theme?.palette?.primary.contrastText};
  }
`;
