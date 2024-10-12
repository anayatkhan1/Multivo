"use client";

import { useDebounce } from "@/lib/useDebounce";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";

const Searchbar = () => {
	const [search, setSearch] = useState("");
	const router = useRouter();
	const pathname = usePathname();

	const debouncedValue = useDebounce(search, 500);

	useEffect(() => {
		if (debouncedValue) {
			router.push(`/discover?search=${debouncedValue}`);
		} else if (!debouncedValue && pathname === "/discover")
			router.push("/discover");
	}, [router, pathname, debouncedValue]);

	return (
		<div className="relative mt-8 block">
			<Input
				className="input-class py-6 pl-12 focus-visible:ring-offset-orange-1"
				placeholder="Search for podcasts"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onLoad={() => setSearch("")}
			/>
			<Image
				src="/icons/search.svg"
				alt="search"
				height={20}
				width={20}
				className="absolute top-3.5 left-4"
			/>
		</div>
	);
};

export default Searchbar;
