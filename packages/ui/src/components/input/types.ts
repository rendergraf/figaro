import { Appearance, Variant } from '../../types/types';
import { paddingSizes } from './styled';

export interface Size {
	size?: keyof typeof paddingSizes;
}

type InputFieldType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';

/**
 * @description Properties related to the input component.
 * @author Xavier Araque
 * @date 16/10/2024
 * @export InputProps
 * @interface InputProps
 * @extends {InputType}
 */
export interface InputType extends Variant, Size, Appearance {
	type?: InputFieldType;
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
