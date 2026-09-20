'use client';

import * as React from 'react';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@woldui/react/components/ui/input-otp';

export default function InputOTPControlled() {
	const [code, setCode] = React.useState('');

	return (
		<div className="flex flex-col items-center gap-3">
			<InputOTP
				maxLength={4}
				value={code}
				onChange={setCode}
				inputMode="numeric"
				pattern="^[0-9]*$"
				aria-label="Four-digit PIN"
			>
				<InputOTPGroup>
					{[0, 1, 2, 3].map((index) => (
						<InputOTPSlot key={index} index={index} />
					))}
				</InputOTPGroup>
			</InputOTP>
			<p className="text-xs text-muted-foreground" aria-live="polite">
				{code.length === 4 ? 'PIN complete.' : `${code.length} of 4 digits entered.`}
			</p>
		</div>
	);
}
