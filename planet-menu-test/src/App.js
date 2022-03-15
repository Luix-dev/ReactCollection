import React from 'react';
import { Planet } from 'react-planet';
import './App.css';

export function App() {
	return (
    <div className='center'>
		<Planet
      dragablePlanet
      dragRadiusPlanet={20}
      bounce
      orbitRadius={200}
      orbitStyle={(defaultStyle) => ({
        ...defaultStyle,
        borderWidth: 4,
        borderStyle: 'dashed',
        borderColor: '#6f03fc',
      })}
			centerContent={
				<div
					style={{
						height: 100,
						width: 100,
						borderRadius: '50%',
						backgroundColor: '#1da8a4',
					}}
				/>
			}
			open
			autoClose
		>
			<div
				style={{
					height: 70,
					width: 70,
					borderRadius: '50%',
					backgroundColor: '#9257ad',
				}}
			/>
			<div
				style={{
					height: 70,
					width: 70,
					borderRadius: '50%',
					backgroundColor: '#9257ad',
				}}
			/>
		</Planet>
    </div>
	);
}
export default App;
