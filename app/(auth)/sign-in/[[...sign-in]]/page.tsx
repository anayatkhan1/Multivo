import { SignIn } from "@clerk/nextjs";

const Page = () => {
	return (
		<div className="glassmorphism-auth h-screen w-full flex-center">
			<SignIn />
		</div>
	);
};

export default Page;
