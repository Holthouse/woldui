import { Carousel, CarouselContent, CarouselItem } from '@woldui/react/components/ui/carousel';

const tints = [
	'from-primary-200 to-primary-400',
	'from-secondary-200 to-secondary-400',
	'from-success-200 to-success-400',
	'from-warning-200 to-warning-400',
	'from-danger-200 to-danger-400',
	'from-default-200 to-default-400'
];

export default function CarouselMultiple() {
	return (
		<Carousel aria-label="Templates" opts={{ align: 'start' }} className="w-full max-w-md">
			<CarouselContent>
				{tints.map((tint, index) => (
					<CarouselItem key={tint} className="basis-1/2 sm:basis-1/3">
						<div
							className={`flex aspect-square items-end rounded-lg bg-linear-to-br p-3 text-sm font-medium ${tint}`}
						>
							Template {index + 1}
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}
