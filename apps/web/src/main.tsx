// main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { rootStyles, Box, Button, Image, Link, Icon, Input } from '@figaro/ui';

const App = () => (
	<div className={rootStyles}>
		<Box
			display='flex'
			flexDirection='row'
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
		</Box>
		<Box
			component='section'
			bgcolor='#ffffff'
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
			flexWrap='nowrap'
			gap='20px'
		>
			<Input placeholder='Name' />
			<Input variant='primary' appearance='outline' placeholder='Name' />
			<Input variant='secondary' appearance='outline' placeholder='Name' />
			<Input variant='tertiary' appearance='outline' placeholder='Name' />
			<Input variant='negative' appearance='outline' placeholder='Name' />
			<Input variant='success' appearance='outline' placeholder='Name' />
			<Input variant='neutral' appearance='outline' placeholder='Name' />
			<hr style={{ width: '100%' }} />
			<Input variant='primary' appearance='filled' placeholder='Name' />
			<Input variant='secondary' appearance='filled' placeholder='Name' />
			<Input variant='tertiary' appearance='filled' placeholder='Name' />
			<Input variant='negative' appearance='filled' placeholder='Name' />
			<Input variant='success' appearance='filled' placeholder='Name' />
			<Input variant='neutral' appearance='filled' placeholder='Name' />
			<hr style={{ width: '100%' }} />
			<Input variant='primary' appearance='flushed' placeholder='Name' />
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
			<hr style={{ width: '100%' }} />

			{/* 			<hr style={{ width: '100%' }} />
			<Input appearance='flushed' placeholder='Phone' />
			<hr style={{ width: '100%' }} />
			<Input appearance='outline' isDisabled placeholder='Name' />
			<Input appearance='filled' placeholder='Lastname' />
			<Input appearance='flushed' placeholder='Phone' />
			<hr style={{ width: '100%' }} />
			<Input variant='negative' appearance='filled' placeholder='Name' /> */}
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
		</Box>
	</div>
);

const root = createRoot(document.querySelector<HTMLDivElement>('#app')!);
root.render(<App />);
