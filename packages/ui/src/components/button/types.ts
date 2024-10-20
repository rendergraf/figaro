//import { ButtonType } from '../../types';

import { variants } from './styled';

export interface Variant {
	variant?: keyof typeof variants;
}
export interface ButtonProps extends Variant {
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	isDisabled?: boolean;
	isLoading?: boolean;
	borderRadius?: string;
	onClick?: () => void;
	className?: string;
	children: React.ReactNode;
}
