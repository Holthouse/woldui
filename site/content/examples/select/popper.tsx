import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@woldui/react/components/ui/select';

const languages = [
	'Dansk',
	'Deutsch',
	'English',
	'Español',
	'Français',
	'Italiano',
	'Nederlands',
	'Norsk',
	'Polski',
	'Português',
	'Suomi',
	'Svenska'
];

export default function SelectPopper() {
	return (
		<Select defaultValue="English">
			<SelectTrigger className="w-48" aria-label="Language">
				<SelectValue />
			</SelectTrigger>
			<SelectContent position="popper" className="max-h-60">
				{languages.map((language) => (
					<SelectItem key={language} value={language}>
						{language}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
