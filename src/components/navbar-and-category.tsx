'use client';

import React, { useState } from 'react';
import Category from './category';
import { CardInformation, TimeframeUnit } from '@/libs/get-time-frames';
import Navbar from './navbar';

type NavbarAndCategoryProps = {
	timeFrames: CardInformation[];
};

export const NavbarAndCategory = ({ timeFrames }: NavbarAndCategoryProps) => {
	const [currentUnit, setCurrentUnit] = useState<TimeframeUnit>('daily');

	return (
		<div className="space-y-6">
			<Navbar
				currentUnit={currentUnit}
				setCurrentUnit={setCurrentUnit}
			/>
			{timeFrames.map((timeFrame) => (
				<Category
					key={timeFrame.id}
					currentUnit={currentUnit}
					timeFrame={timeFrame}
				/>
			))}
		</div>
	);
};
