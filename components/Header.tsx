import { cn } from "@/lib/utils";
import Link from "next/link";

const Header = ({
	headerTitle,
	titleClassName,
}: { headerTitle?: string; titleClassName?: string }) => {
	return (
		<header className="flex items-center justify-between">
			{headerTitle ? (
				<h1 className={cn("font-bold text-18 text-white-1", titleClassName)}>
					{headerTitle}
				</h1>
			) : (
				<div />
			)}
			<Link href="/discover" className="font-semibold text-16 text-orange-1">
				See all
			</Link>
		</header>
	);
};

export default Header;
