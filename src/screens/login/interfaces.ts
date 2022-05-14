export interface ILoginView {
  fullName: string;
  isOfLegalAge: boolean;
  disabledForm: boolean;
  handleTextOnlyInputChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmission: (event: React.FormEvent) => void;
}
