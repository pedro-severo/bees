import styled from "styled-components";
import { designSystem } from "../../designSystem";

const { Stack, Chip, DeleteIcon, AddCircleIcon, IconButton } = designSystem;

export const StyledStack = styled(Stack)`
  display: flex;
  flex-wrap: wrap;
  height: 80px;
`;
