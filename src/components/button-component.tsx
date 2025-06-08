import classNames from 'classnames';
import '../styles/button.css'

interface ButtonComponentProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  classType?: 'primary' | 'secondary';
  loading?: boolean;
  className?: string;
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  text,
  classType = 'primary',
  loading = false,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames(
        'flex justify-center items-center',
        'my-btn',
        `my-btn-${classType}`,
        'mx-2',
        'disabled:opacity-50',
        `${className ? className : ''}`,
        {
          'cursor-not-allowed': !loading && props.disabled,
          'cursor-wait': loading,
        },
      )}
    >
      {text}
    </button>
  );
};
