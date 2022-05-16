import { useState } from "react";

export const useEditableTags = () => {
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
    const { value } = event.target;
    if (newTag.length < 10 || value.length < 10) {
      setNewTag(value);
    }
  };

  return {
    createdLabels,
    isInputOpen,
    setIsInputOpen,
    handleTagCreation,
    newTag,
    handleInputChange,
    handleTagDeletion,
  };
};
