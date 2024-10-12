const authConfig = {
	providers: [
		{
			domain: process.env.CLERK_JWT_TEMPLATE_ISSUER_URL,
			applicationID: "convex",
		},
	],
};

export default authConfig;
