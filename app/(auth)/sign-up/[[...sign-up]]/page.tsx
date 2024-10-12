import { SignUp } from "@clerk/nextjs";

const Page = () => {
	return (
		<div className="glassmorphism-auth h-screen w-full flex-center">
			<SignUp />
		</div>
	);
};

export default Page;
