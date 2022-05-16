import React from "react";
import { designSystem } from "../../designSystem";
import { IEditableTagsView } from "./interfaces";
import { StyledStack } from "./style";

const { Chip, DeleteIcon, AddCircleIcon, IconButton } = designSystem;

export const EditableTagsView: React.FC<IEditableTagsView> = ({
  labels,
  isInputOpen,
  handleAddMoreTagsClick,
  handleTagCreation,
  handleInputChange,
  inputValue,
  handleTagDeletion,
}) => {
  const addMoreTag = isInputOpen ? (
    <form onSubmit={handleTagCreation}>
      <Chip
        icon={
          <IconButton type="submit">
            <AddCircleIcon />
          </IconButton>
        }
        label={<input value={inputValue} onChange={handleInputChange} />}
        color="primary"
      />
    </form>
  ) : (
    <Chip
      icon={
        <IconButton onClick={() => handleAddMoreTagsClick(true)}>
          <AddCircleIcon />
        </IconButton>
      }
      label="Add more"
      color="primary"
    />
  );

  return (
    <StyledStack direction="row" spacing={4}>
      {labels.map((label) => {
        return (
          <Chip
            icon={
              <IconButton onClick={() => handleTagDeletion(label)}>
                <DeleteIcon />
              </IconButton>
            }
            label={label}
            color="primary"
          />
        );
      })}
      {addMoreTag}
    </StyledStack>
  );
};
