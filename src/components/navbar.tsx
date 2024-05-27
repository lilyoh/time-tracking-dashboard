import React from 'react';
import { Card } from '@nextui-org/react';
import { TimeframeUnit } from '@/libs/get-time-frames';

type NavbarProps = {
	currentUnit: TimeframeUnit;
	setCurrentUnit: React.Dispatch<React.SetStateAction<TimeframeUnit>>;
};

const Navbar = ({ currentUnit, setCurrentUnit }: NavbarProps) => {
	console.log('currentUnit in navbar', currentUnit);

	return (
		<Card className="flex flex-row justify-around p-4 pt-10 -mt-6 bg-dark-blue">
			<div
				className={`hover:text-white hover:cursor-pointer ${currentUnit === 'daily' ? 'text-white' : 'text-pale-blue'}`}
				onClick={() => setCurrentUnit('daily')}
			>
				Daily
			</div>
			<div
				className={`hover:text-white hover:cursor-pointer ${
					currentUnit === 'weekly' ? 'text-white' : 'text-pale-blue'
				}`}
				onClick={() => setCurrentUnit('weekly')}
			>
				Weekly
			</div>
			<div
				className={`hover:text-white hover:cursor-pointer ${
					currentUnit === 'monthly' ? 'text-white' : 'text-pale-blue'
				}`}
				onClick={() => setCurrentUnit('monthly')}
			>
				Monthly
			</div>
		</Card>
	);
};

export default Navbar;
