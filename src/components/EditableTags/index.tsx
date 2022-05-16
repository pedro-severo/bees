import React, { useState } from "react";
import { EditableTagsView } from "./view";

export const EditableTags: React.FC<any> = () => {
  const [createdLabels, setCreatedLabels] = useState<string[]>([]);
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [newTag, setNewTag] = useState<string>("");

  const handleTagCreation = (event: React.FormEvent) => {
    event.preventDefault();
    setIsInputOpen(false);
    const tagAlreadyExists = createdLabels.some((label) => label === newTag);
    if (newTag && createdLabels.length < 3 && !tagAlreadyExists) {
      const labels = [...createdLabels, newTag];
      setNewTag("");
      setCreatedLabels(labels);
    }
  };

  const handleTagDeletion = (tag: string) => {
    const tagsAfterRemove = createdLabels.filter((label) => label !== tag);
    setCreatedLabels(tagsAfterRemove);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (newTag.length < 10) {
      const { value } = event.target;
      setNewTag(value);
    }
  };

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
