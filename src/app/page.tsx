import React from 'react';
import User from '@/components/user';
import { getTimeFrames } from '@/libs/get-time-frames';
import { DashboardContents } from '@/components/dashboard-contents';

const Page = async () => {
	const timeFrames = await getTimeFrames();

	// current unit -> variable
	// state (동적으로 변하는 값이면서, 값이 변하면 UI가 맞춰서 변해야 하기 때문에)
	// current unit <- Navbar, Category
	// Page

	return (
		<div className="bg-very-dark-blue flex items-start justify-center py-20 h-dvh">
			<DashboardContents timeFrames={timeFrames} />
		</div>
	);
};

export default Page;
