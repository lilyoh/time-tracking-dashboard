import React from 'react';
import { Card } from '@nextui-org/react';
import Image from 'next/image';
import CategoryEllipsis from './category-ellipsis';
import { CardInformation, TimeframeUnit } from '@/libs/get-time-frames';

type CategoryProps = {
	timeFrame: CardInformation;
	currentUnit: TimeframeUnit;
};

const Category = ({ timeFrame, currentUnit }: CategoryProps) => {
	const { title, timeframes, id } = timeFrame;
	console.log('currentUnit in category', currentUnit);

	// navbar 클릭한 '단위'를 가져와서 (알아서)
	// timeframes.daily.current
	// timeframes.daily.previous

	// 필요한 요소 -> 바뀔 수 있는 가능성

	// 1. 직접 하드코딩하기 -> 여러 형태로 사용할 수 없음(코드 수정 없이)
	// 2. 어디서 가져오기 -> Dependency Injection

	// whole timeFrame
	// current unit

	return (
		<div className="w-[300px]">
			<Card
				className={`bg-work bg-play bg-study bg-exercise bg-social bg-self-care flex items-end justify-center pr-4 pb-4 h-[100px] bg-${TITLE_CONVERT_TABLE[title]}`}
			>
				<Image
					src={icons[TITLE_CONVERT_TABLE[title]]}
					alt="background icon"
					className="-mt-4"
					width={79}
					height={79}
				/>
			</Card>
			<Card className="bg-dark-blue hover:bg-desaturated-blue hover:cursor-pointer z-10 -mt-10 p-6 space-y-3">
				<div className="flex justify-between items-center">
					<div className="text-white font-bold">{title}</div>
					<CategoryEllipsis />
				</div>
				<div className="flex justify-between items-center sm:flex sm:flex-col sm:items-start sm:gap-2">
					<div className="text-white text-3xl">{timeframes[currentUnit].current}hrs</div>
					<div className="text-pale-blue">
						Last {DISPLAYED_UNIT[currentUnit]} - {timeframes[currentUnit].previous}hrs
					</div>
				</div>
			</Card>
		</div>
	);
};

export default Category;

const DISPLAYED_UNIT: { [key in TimeframeUnit]: string } = {
	daily: 'Day',
	weekly: 'Week',
	monthly: 'Month',
};

const icons: { [key in string]: string } = {
	work: '/images/icon-work.svg',
	play: '/images/icon-play.svg',
	study: '/images/icon-study.svg',
	exercise: '/images/icon-exercise.svg',
	social: '/images/icon-social.svg',
	'self-care': '/images/icon-self-care.svg',
};

const TITLE_CONVERT_TABLE: { [key in string]: string } = {
	Work: 'work',
	Play: 'play',
	Study: 'study',
	Exercise: 'exercise',
	Social: 'social',
	'Self Care': 'self-care',
};
