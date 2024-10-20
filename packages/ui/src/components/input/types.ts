import { appearances, variants } from './styled';

export interface Appearance {
	appearance?: keyof typeof appearances;
}
export interface Variant {
	variant?: keyof typeof variants;
}
export interface InputType extends Variant, Appearance {
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
	isDisabled?: boolean;
	borderRadius?: string;
	placeholder?: string;
	error?: boolean;
	success?: boolean;
	helperText?: string;
	showPasswordToggle?: boolean;
	prefix?: React.ReactNode;
	suffix?: React.ReactNode;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onFocus?: () => void;
	onBlur?: () => void;
}
