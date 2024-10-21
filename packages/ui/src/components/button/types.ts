//import { ButtonType } from '../../types';

import { variantsButton } from '../../styles';

export interface Variant {
	variant?: keyof typeof variantsButton;
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
