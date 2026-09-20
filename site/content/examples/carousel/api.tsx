'use client';

import * as React from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi
} from '@woldui/react/components/ui/carousel';

const slides = ['Overview', 'Timeline', 'Team', 'Files', 'Activity'];

export default function CarouselWithApi() {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);

	React.useEffect(() => {
		if (!api) return;
		const update = () => setCurrent(api.selectedScrollSnap());
		update();
		api.on('select', update);
		return () => {
			api.off('select', update);
		};
	}, [api]);

	return (
		<div className="flex w-full max-w-sm flex-col items-center gap-3 px-12">
			<Carousel setApi={setApi} aria-label="Project tabs" className="w-full">
				<CarouselContent>
					{slides.map((slide) => (
						<CarouselItem key={slide}>
							<div className="flex h-32 items-center justify-center rounded-lg border border-border text-lg font-semibold">
								{slide}
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			<p className="text-sm text-muted-foreground" aria-live="polite">
				Slide {current + 1} of {slides.length}
			</p>
		</div>
	);
}
