'use client';

import {
	Questionnaire,
	QuestionnaireActions,
	QuestionnaireChoice,
	QuestionnaireChoiceDescription,
	QuestionnaireChoices,
	QuestionnaireError,
	QuestionnaireInput,
	QuestionnaireItem,
	QuestionnaireNext,
	QuestionnaireSkip,
	QuestionnaireSubmit,
	QuestionnaireTitle
} from '@woldui/react/components/ui/questionnaire';

export default function QuestionnaireTextAnswer() {
	return (
		<Questionnaire className="max-w-sm" onSubmit={(event) => event.preventDefault()}>
			<QuestionnaireItem name="workspace" required>
				<QuestionnaireTitle>Name your workspace</QuestionnaireTitle>
				<QuestionnaireInput placeholder="Acme Inc." aria-label="Workspace name" />
				<QuestionnaireError>Give the workspace a name to continue.</QuestionnaireError>
			</QuestionnaireItem>

			<QuestionnaireItem name="template">
				<QuestionnaireTitle>Pick a starting template</QuestionnaireTitle>
				<QuestionnaireChoices>
					<QuestionnaireChoice value="blank">
						Blank
						<QuestionnaireChoiceDescription>
							Start from an empty board.
						</QuestionnaireChoiceDescription>
					</QuestionnaireChoice>
					<QuestionnaireChoice value="sprints">
						Sprints
						<QuestionnaireChoiceDescription>
							Two-week cycles with a backlog.
						</QuestionnaireChoiceDescription>
					</QuestionnaireChoice>
				</QuestionnaireChoices>
			</QuestionnaireItem>

			<QuestionnaireActions>
				<QuestionnaireSkip />
				<QuestionnaireNext />
				<QuestionnaireSubmit>Create workspace</QuestionnaireSubmit>
			</QuestionnaireActions>
		</Questionnaire>
	);
}
