import React from 'react';
import { Avatar, Card } from '@nextui-org/react';

const User = () => {
	return (
		<Card className="bg-blue">
			<Avatar src="/images/image-jeremy.png" />
			<div className="text-white">
				<p className="text-pale-blue">Report for</p>
				<p>Jeremy Robson</p>
			</div>
		</Card>
	);
};

export default User;
