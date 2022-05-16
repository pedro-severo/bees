import React from "react";
import { useEditableTags } from "./useEditableTags";
import { EditableTagsView } from "./view";

export const EditableTags: React.FC<any> = () => {
  const {
    createdLabels,
    isInputOpen,
    setIsInputOpen,
    handleTagCreation,
    newTag,
    handleInputChange,
    handleTagDeletion,
  } = useEditableTags();

  return (
    <EditableTagsView
      labels={createdLabels}
      isInputOpen={isInputOpen}
      handleAddMoreTagsClick={setIsInputOpen}
      handleTagCreation={handleTagCreation}
      handleInputChange={handleInputChange}
      inputValue={newTag}
      handleTagDeletion={handleTagDeletion}
    />
  );
};
