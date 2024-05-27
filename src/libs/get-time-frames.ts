import categoryInformation from './data.json';

export async function getTimeFramesByHttp(): Promise<CardInformation[]> {
	const res = await fetch('http://localhost:8000/data');

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

export function getTimeFrames(): Promise<CardInformation[]> {
	return Promise.resolve(categoryInformation.data);
}

type TimeFrame = {
	current: number;
	previous: number;
};

export type CardInformation = {
	title: string;
	timeframes: {
		daily: TimeFrame;
		weekly: TimeFrame;
		monthly: TimeFrame;
	};
};

export type TimeframeUnit = 'daily' | 'weekly' | 'monthly';
