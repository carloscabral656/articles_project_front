import { cva, type VariantProps } from 'class-variance-authority';

export const tagStyles = cva(
  'rounded-full bg-gray px-4 py-2 min-w-fit max-w-fit cursor-pointer font-semibold',
  {
    variants: {
      size: {
        sm: 'text-[12px]',
        md: 'text-base',
        lg: 'text-lg',
      },
      isSelected: {
        true: 'bg-primary text-white',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);
