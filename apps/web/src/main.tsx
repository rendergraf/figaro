// main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Box, Button, Image, Link, Icon, Input, ThemeProvider, ButtonThemeToggle } from '@figaro/ui';

const App = () => (
	<ThemeProvider>
		<ButtonThemeToggle />
		{/* 		<Box
			display='flex'
			flexDirection='column'
			bgcolor='red'
			responsive={{
				phone: {
					bgcolor: 'blue',
				},
				tabletPortrait: {
					bgcolor: 'yellow',
				},
				tabletLandscape: {
					bgcolor: 'orange',
				},
				desktop: {
					bgcolor: 'purple',
					display: 'flex',
					flexDirection: 'row',
				},
				largeDesktop: {
					bgcolor: 'green',
				},
				bigDesktop: {
					bgcolor: 'pink',
				},
			}}
		>
			<Button variant='success' size='lg'>
				Click Me
			</Button>
			<Link variant='primary' size='lg' href='https://www.google.com'>
				Google
			</Link>
			<Image
				borderRadius='none'
				objectFit='cover'
				loading='lazy'
				src='https://placehold.co/150'
				alt='placeholder'
				title='Foto'
			/>
		</Box> */}
		<Box
			component='section'
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
			flexWrap='nowrap'
			gap='20px'
		>
			{/* 			<Input placeholder='Password' type='password' showPasswordToggle helperText='Aqui su password' />
			<Input appearance='outline' placeholder='Name' /> */}
			<Button variant='secondary' size='md'>
				<Icon name='clock' color='var(--color-white)' />
				Reloj
			</Button>
			<Button variant='primary' size='md'>
				Aceptar
			</Button>
			<Input
				size='md'
				variant='primary'
				appearance='outline'
				placeholder='Your password'
				type='password'
				showPasswordToggle
				helperText='Aqui su password de session'
				prefix='http://'
				suffix='.com'
				/* borderRadius='20px' */
				onFocus={() => console.log('Focus')}
				onBlur={() => console.log('Blur')}
			/>
			<Input
				size='lg'
				variant='secondary'
				appearance='filled'
				placeholder='Your password'
				type='text'
				/* showPasswordToggle */
				/* 		helperText='Aqui su passwor de session'
				prefix='http://'
				suffix='.com' */
				/* borderRadius='20px' */
				onFocus={() => console.log('Focus')}
				onBlur={() => console.log('Blur')}
			/>
			{/* <Input variant='secondary' appearance='outline' placeholder='Name' />
			<Input variant='tertiary' appearance='outline' placeholder='Name' />
			<Input variant='negative' appearance='outline' placeholder='Name' />
			<Input variant='success' appearance='outline' placeholder='Name' />
			<Input variant='neutral' appearance='outline' placeholder='Name' />
			<hr style={{ width: '100%' }} />
			<Input appearance='filled' placeholder='Password' type='password' showPasswordToggle />
			<Input variant='primary' appearance='filled' placeholder='Name' />
			<Input variant='secondary' appearance='filled' placeholder='Name' />
			<Input variant='tertiary' appearance='filled' placeholder='Name' />
			<Input variant='negative' appearance='filled' placeholder='Name' />
			<Input variant='success' appearance='filled' placeholder='Name' />
			<Input variant='neutral' appearance='filled' placeholder='Name' />
			<hr style={{ width: '100%' }} />
			<Input appearance='flushed' placeholder='Name' />
			<Input variant='primary' appearance='flushed' placeholder='Name' type='password' showPasswordToggle />
			<Input variant='secondary' appearance='flushed' placeholder='Name' />
			<Input variant='tertiary' appearance='flushed' placeholder='Name' />
			<Input variant='negative' appearance='flushed' placeholder='Name' />
			<Input variant='success' appearance='flushed' placeholder='Name' />
			<Input variant='neutral' appearance='flushed' placeholder='Name' />
			<hr style={{ width: '100%' }} />
			<Input variant='primary' isDisabled appearance='outline' placeholder='Name' />
			<Input variant='secondary' isDisabled appearance='outline' placeholder='Name' />
			<Input variant='tertiary' isDisabled appearance='outline' placeholder='Name' />
			<Input variant='negative' isDisabled appearance='outline' placeholder='Name' />
			<Input variant='success' isDisabled appearance='outline' placeholder='Name' />
			<Input variant='neutral' isDisabled appearance='outline' placeholder='Name' />
			<hr style={{ width: '100%' }} />
			<Input variant='primary' isDisabled appearance='filled' placeholder='Name' />
			<Input variant='secondary' isDisabled appearance='filled' placeholder='Name' />
			<Input variant='tertiary' isDisabled appearance='filled' placeholder='Name' />
			<Input variant='negative' isDisabled appearance='filled' placeholder='Name' />
			<Input variant='success' isDisabled appearance='filled' placeholder='Name' />
			<Input variant='neutral' isDisabled appearance='filled' placeholder='Name' />
			<hr style={{ width: '100%' }} />
			<Input variant='primary' isDisabled appearance='flushed' placeholder='Name' />
			<Input variant='secondary' isDisabled appearance='flushed' placeholder='Name' />
			<Input variant='tertiary' isDisabled appearance='flushed' placeholder='Name' />
			<Input variant='negative' isDisabled appearance='flushed' placeholder='Name' />
			<Input variant='success' isDisabled appearance='flushed' placeholder='Name' />
			<Input variant='neutral' isDisabled appearance='flushed' placeholder='Name' />
			<hr style={{ width: '100%' }} /> */}
		</Box>
		<Box
			component='section'
			maxW='100%'
			borderWidth='1px'
			borderRadius='lg'
			overflow='hidden'
			bgcolor='var(--colors-blue-400)'
			color='var(--colors-black)'
			boxShadow='xs'
			p='10px'
			display='flex'
			flexDirection='row'
			justifyContent='center'
			alignItems='center'
			flexWrap='nowrap'
			gap='20px'
		>
			<Image
				borderRadius='full'
				objectFit='cover'
				loading='lazy'
				src='https://placehold.co/150'
				alt='placeholder'
				title='Foto'
			/>
			<Image
				borderRadius='full'
				objectFit='cover'
				loading='lazy'
				src='https://placehold.co/150'
				alt='placeholder'
				title='Foto'
			/>
			<Image
				borderRadius='full'
				objectFit='cover'
				loading='lazy'
				src='https://placehold.co/150'
				alt='placeholder'
				title='Foto'
			/>
			<Image
				borderRadius='full'
				objectFit='cover'
				loading='lazy'
				src='https://placehold.co/150'
				alt='placeholder'
				title='Foto'
			/>
			<Icon name='starSolid' color='white' />
			<Icon name='home' color='white' />
			<Button variant='primary' size='lg'>
				<Icon name='heartSolid' color='white' />
				Click
			</Button>
			<Button variant='tertiary' size='lg'>
				<Icon name='heartSolid' color='var(--button-tertiary-borderColor)' />
				Click
			</Button>
			<Button variant='error' size='lg'>
				<Icon name='clock' color='white' />
				Reloj
			</Button>
		</Box>
	</ThemeProvider>
);

const root = createRoot(document.querySelector<HTMLDivElement>('#app')!);
root.render(<App />);
