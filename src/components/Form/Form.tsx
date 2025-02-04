import Button from '../Button';
import { FormType } from './Form.type';

const Form = ({
  status,
  formData,
  onChange,
  onSubmit,
  buttonLabel = 'Submit',
  className = '',
}: FormType) => {
  return (
    <form
      onSubmit={async e => {
        e.preventDefault();
        await onSubmit(e);
      }}
      className={`flex flex-col w-full gap-4 p-2 md:flex-row md:justify-center ${className}`}
    >
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={onChange}
        className="bg-primary/20 border-none rounded-full text-primary placeholder:text-primary/50 px-5 py-3 md:w-[360px]"
        placeholder="Enter your email address"
        required
      />
      <Button type="submit" className="px-14" disabled={status === 'loading'}>
        {buttonLabel}
      </Button>
    </form>
  );
};

export default Form;
