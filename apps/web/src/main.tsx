import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Heading, Button, Image, Icon, Input, ThemeProvider, ButtonThemeToggle } from '@figaro/ui';

const Box = lazy(() => import('@figaro/ui').then(module => ({ default: module.Box })));

const ButtonSection = React.memo(() => (
	<>
		<Button variant='primary' size='xs'>
			<Icon name='clock' />
		</Button>
		<Button variant='primary' size='xs'>
			<Icon name='clock' />
			Reloj
		</Button>
		<Button variant='secondary' size='sm'>
			Aceptar
		</Button>
		<Button variant='tertiary' size='md'>
			<Icon name='clock' />
			Reloj
		</Button>
		<Button variant='primary' size='lg'>
			Aceptar
		</Button>
		<Button variant='error' size='xl'>
			Aceptar
		</Button>
		<Button variant='warning' size='md'>
			Aceptar
		</Button>
		<Button variant='tertiary' size='lg'>
			Relsdfsd
		</Button>
		<Button variant='primary' size='lg'>
			Aceptar
		</Button>
	</>
));
ButtonSection.displayName = 'ButtonSection';

const InputSection = React.memo(() => (
	<>
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
			onFocus={() => console.log('Focus')}
			onBlur={() => console.log('Blur')}
		/>
		<Input
			size='lg'
			variant='secondary'
			appearance='filled'
			placeholder='Your password'
			type='text'
			onFocus={() => console.log('Focus')}
			onBlur={() => console.log('Blur')}
		/>
		<Input
			size='lg'
			variant='tertiary'
			appearance='filled'
			placeholder='Your password'
			type='text'
			onFocus={() => console.log('Focus')}
			onBlur={() => console.log('Blur')}
		/>
		<Input
			size='lg'
			variant='tertiary'
			appearance='flushed'
			placeholder='Your password'
			type='text'
			onFocus={() => console.log('Focus')}
			onBlur={() => console.log('Blur')}
		/>
		<Input
			size='lg'
			variant='primary'
			appearance='flushed'
			placeholder='Your password'
			type='text'
			onFocus={() => console.log('Focus')}
			onBlur={() => console.log('Blur')}
		/>
		<Input
			size='lg'
			variant='primary'
			appearance='flushed'
			placeholder='Your password'
			type='password'
			showPasswordToggle
			helperText='Aqui su password de session'
			onFocus={() => console.log('Focus')}
			onBlur={() => console.log('Blur')}
		/>
		<Input
			size='lg'
			variant='primary'
			appearance='outline'
			placeholder='Your Name'
			type='text'
			onFocus={() => console.log('Focus')}
			onBlur={() => console.log('Blur')}
		/>
	</>
));
InputSection.displayName = 'InputSection';

const ImageSection = React.memo(() => {
	const images = Array(4).fill(null);
	return (
		<>
			{images.map((_, index) => (
				<Image
					key={index}
					borderRadius='full'
					objectFit='cover'
					loading='lazy'
					src='https://placehold.co/150'
					alt='placeholder'
					title='Foto'
				/>
			))}
		</>
	);
});
ImageSection.displayName = 'ImageSection';

const IconButtonsSection = React.memo(() => (
	<>
		<Icon name='starSolid' color='white' />
		<Icon name='home' color='white' />
		<Button variant='primary' size='lg'>
			<Icon name='heartSolid' />
			Click
		</Button>
		<Button variant='tertiary' size='lg'>
			<Icon name='heartSolid' />
			Click
		</Button>
		<Button variant='error' size='lg'>
			<Icon name='clock' />
			Reloj
		</Button>
	</>
));

IconButtonsSection.displayName = 'IconButtonsSection';

const App = () => (
	<ThemeProvider>
		<ButtonThemeToggle />
		<Heading as='h1' size='h1' fontWeight='bold' variant='secondary' letterSpacing='normal'>
			Hello, World!
		</Heading>
		<Suspense fallback={<div>Cargando...</div>}>
			<Box
				component='section'
				display='flex'
				flexDirection='column'
				justifyContent='center'
				alignItems='center'
				flexWrap='nowrap'
				gap='20px'
			>
				<ButtonSection />
				<InputSection />
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
				<ImageSection />
				<IconButtonsSection />
			</Box>
		</Suspense>
	</ThemeProvider>
);

const root = createRoot(document.querySelector<HTMLDivElement>('#app')!);
root.render(<App />);
