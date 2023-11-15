'use client';

interface CustomButtonProps {
  title: string;
  containerStyles: string;
  btnType?: 'button' | 'submit';
  handleClick?: () => void;
}

export const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType = 'button',
}: CustomButtonProps) => {
  return (
    <button
      type={btnType}
      disabled={false}
      onClick={handleClick}
      className={`custom-btn ${containerStyles}`}
    >
      <span className='flex-1'>{title}</span>
    </button>
  );
};
