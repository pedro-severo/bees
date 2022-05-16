export interface IEditableTagsView {
  labels: string[];
  isInputOpen: boolean;
  handleAddMoreTagsClick: (shouldOpen: boolean) => void;
  handleTagCreation: (event: React.FormEvent) => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  handleTagDeletion: (tag: string) => void;
}
