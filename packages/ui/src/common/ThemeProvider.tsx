import React, { createContext, useContext, useState, useEffect } from 'react';
import { rootStyles } from '../tokens/css/rootStyles';

const ThemeContext = createContext({
	isDarkMode: false,
	toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const isDark = localStorage.getItem('darkMode') === 'true';
		setIsDarkMode(isDark);
	}, []);

	useEffect(() => {
		document.documentElement.style.setProperty('color-scheme', isDarkMode ? 'dark' : 'light');
		localStorage.setItem('darkMode', isDarkMode.toString());
	}, [isDarkMode]);

	const toggleTheme = () => {
		setIsDarkMode(prev => !prev);
	};

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			<div className={rootStyles}>{children}</div>
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);
