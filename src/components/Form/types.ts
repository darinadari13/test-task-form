export default interface FormProps {
  initialValue: string;
  onSubmit: (newUsername: string) => void;
  onCancel: () => void;
}
