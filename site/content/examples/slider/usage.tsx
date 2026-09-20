import { Label } from '@woldui/react/components/ui/label';
import { Slider } from '@woldui/react/components/ui/slider';

export default function SliderUsage() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-3">
			<Label id="slider-volume-label">Notification volume</Label>
			<Slider defaultValue={[40]} max={100} step={1} aria-labelledby="slider-volume-label" />
		</div>
	);
}
