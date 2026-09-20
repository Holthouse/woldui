'use client';

import {
	Questionnaire,
	QuestionnaireActions,
	QuestionnaireChoice,
	QuestionnaireChoices,
	QuestionnaireDescription,
	QuestionnaireItem,
	QuestionnaireNext,
	QuestionnairePrevious,
	QuestionnaireProgress,
	QuestionnaireSubmit,
	QuestionnaireTitle
} from '@woldui/react/components/ui/questionnaire';

export default function QuestionnaireUsage() {
	return (
		<Questionnaire
			className="max-w-sm"
			defaultItem="team"
			onSubmit={(event) => event.preventDefault()}
		>
			<QuestionnaireProgress />

			<QuestionnaireItem name="team" required>
				<QuestionnaireTitle>How big is your team?</QuestionnaireTitle>
				<QuestionnaireDescription>
					We use this to suggest a starting layout.
				</QuestionnaireDescription>
				<QuestionnaireChoices>
					<QuestionnaireChoice value="solo">Just me</QuestionnaireChoice>
					<QuestionnaireChoice value="small">2 to 10 people</QuestionnaireChoice>
					<QuestionnaireChoice value="large">More than 10</QuestionnaireChoice>
				</QuestionnaireChoices>
			</QuestionnaireItem>

			<QuestionnaireItem name="use" multiple>
				<QuestionnaireTitle>What will you use it for?</QuestionnaireTitle>
				<QuestionnaireChoices>
					<QuestionnaireChoice value="projects">Tracking projects</QuestionnaireChoice>
					<QuestionnaireChoice value="docs">Writing docs</QuestionnaireChoice>
					<QuestionnaireChoice value="planning">Planning releases</QuestionnaireChoice>
				</QuestionnaireChoices>
			</QuestionnaireItem>

			<QuestionnaireActions>
				<QuestionnairePrevious>Back</QuestionnairePrevious>
				<QuestionnaireNext />
				<QuestionnaireSubmit>Finish</QuestionnaireSubmit>
			</QuestionnaireActions>
		</Questionnaire>
	);
}
