import React, { useState, useRef, useEffect } from 'react';
import { styled } from '@linaria/react';
import { lighten } from 'polished'; // Importa lighten desde polished
import { InputType } from '../../types';
import { Button } from '../button';
/* import { Box } from '../../containers/box'; */
import { Icon } from '../icons';
import { css } from '@linaria/core';
import { appearances, fontSizes, height, paddingSizes, variants } from '../../styles';

/**
 * @description Properties related to the input component.
 * @author Xavier Araque
 * @date 16/10/2024
 * @export InputProps
 * @interface InputProps
 * @extends {InputType}
 */
export interface InputProps extends InputType {
	isDisabled?: boolean;
	borderRadius?: string;
	placeholder?: string;
	error?: boolean; // Para indicar si hay un error
	success?: boolean; // Para indicar si la entrada es válida
	helperText?: string; // Mensaje de ayuda o error
	showPasswordToggle?: boolean; // Para mostrar/ocultar la contraseña
	prefix?: React.ReactNode; // Icono o texto antes del input
	suffix?: React.ReactNode; // Icono o texto después del input
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Manejar cambios
	onFocus?: () => void; // Manejar foco
	onBlur?: () => void; // Manejar pérdida de foco
}

const InputStyled = styled.input<InputProps>`
	outline: 0;
	appearance: none;
	flex-grow: 1;
	border-style: double;
	text-align: start;
	min-width: 0px;
	height: ${({ size }) => height[size || 'md']};
	cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'text')};
	opacity: ${({ isDisabled }) => (isDisabled ? 0.4 : 1)};
	padding: ${({ size }) => {
		const { x, y } = paddingSizes[size || 'xs'];
		return `${y} ${x}`;
	}};
	padding-inline-end: ${({ showPasswordToggle }) => (showPasswordToggle ? '40px' : '0')};
	border-color: ${({ appearance, variant }) =>
		appearance === 'filled' ? 'var(--color-transparent)' : variants[variant || 'neutral'].surface};
	border-top-width: ${({ appearance }: { appearance?: keyof typeof appearances }) =>
		appearances[appearance || 'outline'].borderTheRest};
	border-right-width: ${({ appearance }: { appearance?: keyof typeof appearances }) =>
		appearances[appearance || 'outline'].borderTheRest};
	border-bottom-width: ${({ appearance }: { appearance?: keyof typeof appearances }) =>
		appearances[appearance || 'outline'].borderBottomWidth};
	border-left-width: ${({ appearance }: { appearance?: keyof typeof appearances }) =>
		appearances[appearance || 'outline'].borderTheRest};
	font-size: ${({ size }) => fontSizes[size || 'md']};
	/* 	border-color: ${({ error, success, variant }) =>
		error ? 'red' : success ? 'green' : variants[variant || 'neutral'].surface}; */
	transition:
		border-color 0.2s,
		box-shadow 0.2s;
	border-radius: ${({ borderRadius, appearance }) => (appearance === 'flushed' ? '0' : borderRadius || '4px')};
	color: ${({ variant }) => variants[variant || 'neutral'].text};
	background-color: ${({ variant, appearance }) =>
		appearance === 'filled'
			? lighten(0.35, variants[variant || 'neutral']?.surface || 'var(--color-gray-100)')
			: 'var(--color-transparent)'};
	z-index: 1;

	&:is(:focus-visible, [data-focus-visible]) {
		outline-style: solid;
		outline-offset: 0px;
		outline-width: ${({ appearance }) => (appearance === 'flushed' ? '0px' : '1px')};
		outline-color: ${({ variant }) => variants[variant || 'neutral'].surface};
		box-shadow: ${({ appearance, variant }) =>
			appearance === 'flushed' ? `0px 1px 0px 0px ${variants[variant || 'neutral'].surface}` : 'none'};
		border-color: ${({ variant }) => variants[variant || 'neutral'].surface};
	}

	&:focus {
		box-shadow: ${({ appearance, variant }) =>
			appearance === 'flushed' ? `0px 1px 0px 0px ${variants[variant || 'neutral'].surface}` : 'none'};
	}
`;

const StyledWrapperInput = styled.div`
	font-family: Arial, Helvetica, sans-serif;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	gap: var(--unit);
	box-sizing: border-box;
`;

const StyledWrapperInputRow = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
`;

const StyledWrapperButton = styled.div`
	display: flex;
	position: absolute;
	align-items: center;
	right: var(--unit);
	padding-right: var(--unit);
	padding-left: var(--unit);
	z-index: 3;
`;

const HelperText = styled.span`
	font-size: 16px;
`;

const StyleSpanPrefix = styled.span`
	position: absolute;
	display: flex;
	flex-shrink: 0;
	align-items: center;
	left: var(--unit);
	padding-left: var(--unit);
	padding-right: var(--unit);
	border-right: 1px solid var(--color-gray-100);
`;

const StyleSpanSufix = styled.span<InputProps>`
	position: absolute;
	display: flex;
	flex-shrink: 0;
	align-items: center;
	padding-left: var(--unit);
	padding-right: var(--unit);
	right: ${({ showPasswordToggle }) => (showPasswordToggle ? '54px' : '16px')};
	border-left: 1px solid var(--color-gray-100);
`;

const StyledButton = css`
	padding: var(--half-unit) + var(--quarter-unit);
`;

/**
 * A styled input component for text input.
 *
 * This component allows for customization through various props, including size,
 * variant, appearance, and more. It utilizes the styled-components library for
 * consistent styling across different input variations.
 *
 * @component
 * @param {Object} props - The props for the Input component.
 * @param {keyof typeof sizes} [props.size] - The size of the input, controlling padding.
 * @param {keyof typeof variants} [props.variant] - The visual style variant of the input.
 * @param {boolean} [props.isDisabled=false] - Indicates if the input should be disabled.
 * @param {string} [props.borderRadius] - Custom border radius for the input.
 * @param {string} [props.placeholder] - Placeholder text for the input field.
 * @param {keyof typeof appearances} [props.appearance] - The appearance style of the input.
 *
 * @returns {JSX.Element} The rendered Input component.
 *
 * @example
 * <Input
 *   size="md"
 *   variant="primary"
 *   isDisabled={false}
 *   borderRadius="4px"
 *   placeholder="Enter text"
 *   appearance="outline"
 * />
 */
export const Input: React.FC<InputProps> = ({
	variant = 'neutral',
	appearance = 'outline',
	type = 'text',
	size = 'md',
	isDisabled = false,
	borderRadius,
	placeholder,
	error,
	success,
	helperText,
	showPasswordToggle,
	prefix,
	suffix,
	onChange,
	onFocus,
	onBlur,
	...props
}) => {
	const [inputType, setInputType] = React.useState(type);

	// Refs for prefix and suffix
	const inputRef = useRef<HTMLInputElement>(null);
	const prefixRef = useRef<HTMLSpanElement>(null);
	const suffixRef = useRef<HTMLSpanElement>(null);
	const [paddingLeft, setPaddingLeft] = useState(0);
	const [paddingRight, setPaddingRight] = useState(0);
	const [heightInput, setHeightInput] = useState(0);

	const handlePasswordToggle = () => {
		setInputType(inputType === 'password' ? 'text' : 'password');
	};

	useEffect(() => {
		const prefixWidth = prefixRef.current?.offsetWidth || 0;
		const suffixWidth = suffixRef.current?.offsetWidth || 0;
		const toggleWidth = showPasswordToggle ? 40 : 0;
		const inputHeight = inputRef.current?.offsetHeight || 0;
		if (inputRef.current) {
			setPaddingLeft(prefixWidth + 16);
			setPaddingRight(suffixWidth + toggleWidth + 16);
			setHeightInput(inputHeight);
		}
	}, [prefix, suffix, showPasswordToggle]);

	return (
		<StyledWrapperInput>
			<StyledWrapperInputRow>
				{prefix && (
					<StyleSpanPrefix ref={prefixRef} style={{ height: `${heightInput}px` }}>
						{prefix}
					</StyleSpanPrefix>
				)}
				<InputStyled
					ref={inputRef}
					variant={variant}
					appearance={appearance}
					type={inputType}
					size={size}
					isDisabled={isDisabled}
					borderRadius={borderRadius}
					placeholder={placeholder}
					disabled={isDisabled}
					aria-disabled={isDisabled}
					onChange={onChange}
					onFocus={onFocus}
					onBlur={onBlur}
					style={{
						paddingLeft: `${paddingLeft}px`,
						paddingRight: `${paddingRight}px`,
						borderColor: error ? 'red' : success ? 'green' : undefined,
					}}
					showPasswordToggle={showPasswordToggle}
					{...props}
				/>
				{suffix && (
					<StyleSpanSufix
						showPasswordToggle={showPasswordToggle}
						ref={suffixRef}
						style={{ height: `${heightInput}px` }}
					>
						{suffix}
					</StyleSpanSufix>
				)}
				{showPasswordToggle && (
					<StyledWrapperButton style={{ height: `${heightInput}px` }}>
						<Button onClick={handlePasswordToggle} variant='neutral' size='xs' className={StyledButton}>
							{<Icon name={inputType === 'password' ? 'eye' : 'eyeSlash'} color='white' size={16} />}
						</Button>
					</StyledWrapperButton>
				)}
			</StyledWrapperInputRow>
			{helperText && <HelperText>{helperText}</HelperText>}
		</StyledWrapperInput>
	);
};

Input.displayName = 'Input';
