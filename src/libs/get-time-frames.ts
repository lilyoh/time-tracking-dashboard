export async function getTimeFrames(): Promise<CardInformation[]> {
	const res = await fetch('http://localhost:8000/data');

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
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
	id: string;
};

export type TimeframeUnit = 'daily' | 'weekly' | 'monthly';
