import { ChangeEvent } from 'react';

export type Status = 'idle' | 'loading' | 'success' | 'error';

export type FormType = {
  status: Status;
  formData: { email: string };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  buttonLabel?: string;
};
