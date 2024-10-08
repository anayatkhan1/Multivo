"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { useAudio } from "@/providers/AudioProvider";
import { SignedIn, SignedOut, useClerk } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";

const LeftSidebar = () => {
	const pathname = usePathname();
	const router = useRouter();
	const { signOut } = useClerk();
	const { audio } = useAudio();

	return (
		<section
			className={cn("left_sidebar h-[calc(100vh-5px)]", {
				"h-[calc(100vh-140px)]": audio?.audioUrl,
			})}
		>
			<nav className="flex flex-col gap-6">
				<Link
					href="/"
					className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center"
				>
					<Image src="/icons/logo.svg" alt="logo" width={23} height={27} />
					<h1 className="font-extrabold text-24 text-white max-lg:hidden">
						Multivo
					</h1>
				</Link>

				{sidebarLinks.map(({ route, label, imgURL }) => {
					const isActive =
						pathname === route || pathname.startsWith(`${route}/`);

					return (
						<Link
							href={route}
							key={label}
							className={cn(
								"flex items-center justify-center gap-3 py-4 max-lg:px-4 lg:justify-start",
								{
									"border-orange-1 border-r-4 bg-nav-focus": isActive,
								},
							)}
						>
							<Image src={imgURL} alt={label} width={24} height={24} />
							<p>{label}</p>
						</Link>
					);
				})}
			</nav>
			<SignedOut>
				<div className="w-full flex-center pb-14 max-lg:px-4 lg:pr-8">
					<Button asChild className="w-full bg-orange-1 font-extrabold text-16">
						<Link href="/sign-in">Sign in</Link>
					</Button>
				</div>
			</SignedOut>
			<SignedIn>
				<div className="w-full flex-center pb-14 max-lg:px-4 lg:pr-8">
					<Button
						className="w-full bg-orange-1 font-extrabold text-16"
						onClick={() => signOut(() => router.push("/"))}
					>
						Log Out
					</Button>
				</div>
			</SignedIn>
		</section>
	);
};

export default LeftSidebar;
