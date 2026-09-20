import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@woldui/react/components/ui/carousel';

const slides = ['Plan', 'Design', 'Build', 'Launch'];

export default function CarouselUsage() {
	return (
		// The arrows sit outside the carousel, so leave room for them.
		<div className="w-full max-w-sm px-12">
			<Carousel aria-label="Project phases">
				<CarouselContent>
					{slides.map((slide, index) => (
						<CarouselItem key={slide} aria-label={`${index + 1} of ${slides.length}`}>
							<div className="flex aspect-video items-center justify-center rounded-lg border border-border bg-content2 text-lg font-semibold">
								{slide}
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
}
