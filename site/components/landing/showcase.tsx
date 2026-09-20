'use client';

import * as React from 'react';
import { toast } from 'sonner';
import { Bell, CheckCircle2, Rocket, Sparkles } from 'lucide-react';
import { Field } from '@woldui/react/components/atoms/field';
import { Avatar, AvatarFallback, AvatarGroup } from '@woldui/react/components/ui/avatar';
import { Badge } from '@woldui/react/components/ui/badge';
import { Button } from '@woldui/react/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@woldui/react/components/ui/card';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@woldui/react/components/ui/dialog';
import { Input } from '@woldui/react/components/ui/input';
import { Label } from '@woldui/react/components/ui/label';
import { Progress } from '@woldui/react/components/ui/progress';
import { Slider } from '@woldui/react/components/ui/slider';
import { Switch } from '@woldui/react/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@woldui/react/components/ui/tabs';
import { cn } from '@woldui/react/lib/utils';

/** A card that bobs gently. The theme's reduced-motion rule stops the keyframe. */
function Floating({
	children,
	delay,
	className
}: {
	children: React.ReactNode;
	delay: string;
	className?: string;
}) {
	return (
		<div className={cn('animate-float', className)} style={{ animationDelay: delay }}>
			{children}
		</div>
	);
}

function SignInCard() {
	return (
		<Card className="w-full shadow-[var(--elevation-large)]">
			<CardHeader>
				<CardTitle>Welcome back</CardTitle>
				<CardDescription>Sign in to your workspace.</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				<Field label="Email">
					{(props) => <Input {...props} type="email" placeholder="you@example.com" />}
				</Field>
				<Field label="Password">
					{(props) => <Input {...props} type="password" defaultValue="hunter22" />}
				</Field>
				<div className="flex items-center gap-2">
					<Switch id="remember" defaultChecked />
					<Label htmlFor="remember">Remember me</Label>
				</div>
			</CardContent>
			<CardFooter>
				<Button
					className="w-full"
					onClick={() =>
						toast.success('Signed in', { description: 'Press any button to feel the ripple.' })
					}
				>
					Sign in
				</Button>
			</CardFooter>
		</Card>
	);
}

function TabsCard() {
	return (
		<Card size="sm" className="w-full shadow-[var(--elevation-medium)]">
			<CardContent>
				<Tabs defaultValue="overview">
					<TabsList className="w-full">
						<TabsTrigger value="overview">Overview</TabsTrigger>
						<TabsTrigger value="activity">Activity</TabsTrigger>
						<TabsTrigger value="settings">Settings</TabsTrigger>
					</TabsList>
					<TabsContent value="overview" className="pt-3 text-sm text-muted-foreground">
						The indicator slides between tabs with a shared-layout spring.
					</TabsContent>
					<TabsContent value="activity" className="pt-3 text-sm text-muted-foreground">
						3 deploys today, all green.
					</TabsContent>
					<TabsContent value="settings" className="pt-3 text-sm text-muted-foreground">
						Arrow keys move between tabs.
					</TabsContent>
				</Tabs>
			</CardContent>
		</Card>
	);
}

function TeamCard() {
	const [progress, setProgress] = React.useState([68]);
	return (
		<Card size="sm" className="w-full shadow-[var(--elevation-medium)]">
			<CardHeader>
				<div className="flex items-center justify-between">
					<CardTitle>Launch sprint</CardTitle>
					<Badge variant="success">On track</Badge>
				</div>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				<AvatarGroup>
					{[
						['A', 'from-primary-300 to-primary-500'],
						['L', 'from-secondary-300 to-secondary-500'],
						['J', 'from-success-300 to-success-500'],
						['R', 'from-warning-300 to-warning-500']
					].map(([initial, gradient]) => (
						<Avatar key={initial} size="lg">
							<AvatarFallback className={cn('bg-linear-to-br font-semibold text-white', gradient)}>
								{initial}
							</AvatarFallback>
						</Avatar>
					))}
				</AvatarGroup>
				<div className="flex flex-col gap-2">
					<div className="flex justify-between text-xs text-muted-foreground">
						<span>Progress</span>
						<span className="tabular-nums">{progress[0]}%</span>
					</div>
					<Progress value={progress[0]} aria-label="Sprint progress" />
				</div>
				<Slider
					value={progress}
					onValueChange={setProgress}
					max={100}
					step={1}
					aria-label="Adjust progress"
				/>
			</CardContent>
		</Card>
	);
}

function ActionsCard() {
	return (
		<Card size="sm" className="w-full shadow-[var(--elevation-medium)]">
			<CardHeader>
				<CardTitle>Try the motion</CardTitle>
				<CardDescription>Everything here is a real, working component.</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-wrap gap-2">
				<Button
					variant="flat"
					tone="secondary"
					onClick={() =>
						toast('Release scheduled', {
							description: 'v2.0 goes out tomorrow at 09:00.',
							icon: <Rocket className="size-4" aria-hidden />
						})
					}
				>
					<Bell aria-hidden /> Show toast
				</Button>
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="flat" tone="primary">
							<Sparkles aria-hidden /> Open dialog
						</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Smooth by default</DialogTitle>
							<DialogDescription>
								Overlays scale in on a decelerating curve, trap focus, and close on Escape.
							</DialogDescription>
						</DialogHeader>
						<DialogFooter>
							<DialogClose asChild>
								<Button>
									<CheckCircle2 aria-hidden /> Got it
								</Button>
							</DialogClose>
						</DialogFooter>
					</DialogContent>
				</Dialog>
				<div className="flex w-full flex-wrap gap-1.5 pt-1">
					<Badge variant="primary">Primary</Badge>
					<Badge variant="secondary">Secondary</Badge>
					<Badge variant="success">Success</Badge>
					<Badge variant="warning">Warning</Badge>
				</div>
			</CardContent>
		</Card>
	);
}

/** The live collage under the hero: four cards of working components, gently floating. */
export function Showcase() {
	return (
		<div className="grid w-full items-start gap-5 md:grid-cols-3">
			<Floating delay="0s" className="md:mt-10">
				<TeamCard />
			</Floating>
			<Floating delay="-2s">
				<SignInCard />
			</Floating>
			<div className="flex flex-col gap-5 md:mt-16">
				<Floating delay="-1s">
					<TabsCard />
				</Floating>
				<Floating delay="-3s">
					<ActionsCard />
				</Floating>
			</div>
		</div>
	);
}
