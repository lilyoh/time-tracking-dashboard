'use client';

import React from 'react';

const CategoryEllipsis = () => {
	return (
		<svg
			width="21"
			height="5"
			xmlns="http://www.w3.org/2000/svg"
			className="svg-icon"
			onMouseEnter={(e) => e.currentTarget.classList.add('hovered')}
			onMouseLeave={(e) => e.currentTarget.classList.remove('hovered')}
		>
			<path
				d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
				fill="#BBC0FF"
				fill-rule="evenodd"
			/>
		</svg>
	);
};

export default CategoryEllipsis;
