import { Appearance, Variant } from './types';

type InputFieldType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';

/**
 * @description Properties related to the input component.
 * @author Xavier Araque
 * @date 16/10/2024
 * @export InputProps
 * @interface InputProps
 * @extends {InputType}
 */
export interface InputType extends Variant, Appearance {
	type?: InputFieldType;
}
