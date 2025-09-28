import { cva, type VariantProps } from 'class-variance-authority';

export const buttonStyles = cva(
  'px-4 py-2 rounded-xl font-semibold transition-colors bg',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:opacity-80',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700',
        tertiary: 'hover:bg-slate-100 text-primary',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed hover:opacity-50',
        false: '',
      },
      full: {
        true: '!w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      disabled: false,
    },
  }
);

export type ButtonProps = VariantProps<typeof buttonStyles>;
