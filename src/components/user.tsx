import React from 'react';
import { Avatar, Card } from '@nextui-org/react';

const User = () => {
	return (
		<Card className="bg-blue p-6 flex flex-row gap-4 items-center z-10">
			<Avatar
				src="/images/image-jeremy.png"
				className="border-2 border-white"
				size="lg"
			/>
			<div className="text-white space-y-1">
				<p className="text-pale-blue text-[18px]">Report for</p>
				<p className="text-[24px]">Jeremy Robson</p>
			</div>
		</Card>
	);
};

export default User;
