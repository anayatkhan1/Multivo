import { EmptyStateProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const EmptyState = ({
	title,
	search,
	buttonLink,
	buttonText,
}: EmptyStateProps) => {
	return (
		<section className="size-full flex-center flex-col gap-3">
			<Image
				src="/icons/emptyState.svg"
				width={250}
				height={250}
				alt="empty state"
			/>
			<div className="w-full max-w-[254px] flex-center flex-col gap-3">
				<h1 className="text-center font-medium text-16 text-white-1">
					{title}
				</h1>
				{search && (
					<p className="text-center font-medium text-16 text-white-2">
						Try adjusting your search to find what you are looking for
					</p>
				)}
				{buttonLink && (
					<Button className="bg-orange-1">
						<Link href={buttonLink} className="flex gap-1">
							<Image
								src="/icons/discover.svg"
								width={20}
								height={20}
								alt="discover"
							/>
							<h1 className="font-extrabold text-16 text-white-1">
								{buttonText}
							</h1>
						</Link>
					</Button>
				)}
			</div>
		</section>
	);
};

export default EmptyState;
