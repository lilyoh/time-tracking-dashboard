'use client';

import React, { useState } from 'react';
import Category from './category';
import { CardInformation, TimeframeUnit } from '@/libs/get-time-frames';
import Navbar from './navbar';
import User from './user';

type DashboardContentsProps = {
	timeFrames: CardInformation[];
};

export const DashboardContents = ({ timeFrames }: DashboardContentsProps) => {
	const [currentUnit, setCurrentUnit] = useState<TimeframeUnit>('daily');

	return (
		<div className="max-sm:space-y-6 sm:flex sm:gap-6 sm:items-stretch">
			<div className="w-[300px] sm:flex sm:flex-col">
				<div className="h-2/3">
					<User />
				</div>
				<div className="flex-grow">
					<Navbar
						currentUnit={currentUnit}
						setCurrentUnit={setCurrentUnit}
					/>
				</div>
			</div>
			<div className="max-sm:space-y-6 sm:grid sm:grid-cols-3 sm:gap-6">
				{timeFrames.map((timeFrame) => (
					<Category
						key={timeFrame.id}
						currentUnit={currentUnit}
						timeFrame={timeFrame}
					/>
				))}
			</div>
		</div>
	);
};

// container -> stretch
// user, navbar -> ratio

// container ->
// user, navbar -> height -> desktop adjust
