import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../button';
import { Icon } from '../icons';
import { InputType } from './types';
import * as S from './styled';

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
export const Input: React.FC<InputType> = ({
	variant = 'neutral',
	appearance = 'outline',
	size,
	isDisabled = false,
	showPasswordToggle,
	borderRadius,
	type = 'text',
	placeholder,
	error,
	success,
	helperText,
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
		<S.Wrapper>
			<S.Row>
				{prefix && (
					<S.Prefix ref={prefixRef} style={{ height: `${heightInput}px` }}>
						{prefix}
					</S.Prefix>
				)}
				<S.Input
					ref={inputRef}
					size={size}
					variant={variant}
					appearance={appearance}
					type={inputType}
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
					<S.Sufix showPasswordToggle={showPasswordToggle} ref={suffixRef} style={{ height: `${heightInput}px` }}>
						{suffix}
					</S.Sufix>
				)}
				{showPasswordToggle && (
					<S.WrapperButton style={{ height: `${heightInput}px` }}>
						<Button onClick={handlePasswordToggle} variant='neutral' size='xs' className={S.Button}>
							{<Icon name={inputType === 'password' ? 'eye' : 'eyeSlash'} color='white' size={16} />}
						</Button>
					</S.WrapperButton>
				)}
			</S.Row>
			{helperText && <S.HelperText>{helperText}</S.HelperText>}
		</S.Wrapper>
	);
};

Input.displayName = 'Input';
