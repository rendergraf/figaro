import React from 'react';
import { useTheme } from '../../common/ThemeProvider';

export const ButtonThemeToggle: React.FC = () => {
	const { isDarkMode, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			style={{
				padding: '10px',
				borderRadius: '5px',
				cursor: 'pointer',
				backgroundColor: 'var(--button-bg)',
				color: 'var(--button-text)',
				border: 'none',
			}}
		>
			{isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
		</button>
	);
};
