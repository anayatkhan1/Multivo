<div align="center">
  <br />
    <a href="https://youtu.be/zfAb95tJvZQ" target="_blank">
      <img src="https://github.com/user-attachments/assets/632e9b8a-be02-444b-9b2d-9276a33ceaa7" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_._JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-OpenAI-black?style=for-the-badge&logoColor=white&logo=openai&color=412991" alt="openai" />
  </div>

  <h3 align="center">AI Podcast Platform</h3>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)

## <a name="introduction">🤖 Introduction</a>

A cutting-edge AI SaaS platform that enables users to create, discover, and enjoy podcasts with advanced features like text-to-audio conversion with multi-voice AI, podcast thumbnail Image generation and seamless playback. 

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- Convex
- OpenAI
- Clerk
- ShadCN
- Tailwind CSS
#### Tools
- [Biome](https://biomejs.dev/)
- [Husky](https://typicode.github.io/husky/)

## <a name="features">🔋 Features</a>

- **Robust Authentication**: Secure and reliable user login and registration system.

- **Modern Home Page**: Showcases trending podcasts with a sticky podcast player for continuous listening.

- **Discover Podcasts Page**: Dedicated page for users to explore new and popular podcasts.

- **Fully Functional Search**: Allows users to find podcasts easily using various search criteria.

- **Create Podcast Page**: Enables podcast creation with text-to-audio conversion, AI image generation, and previews.

- **Multi Voice AI Functionality**: Supports multiple AI-generated voices for dynamic podcast creation.

- **Profile Page**: View all created podcasts with options to delete them.

- **Podcast Details Page**: Displays detailed information about each podcast, including creator details, number of listeners, and transcript.

- **Podcast Player**: Features backward/forward controls, as well as mute/unmute functionality for a seamless listening experience.

- **Responsive Design**: Fully functional and visually appealing across all devices and screen sizes.

and many more, including code architecture and reusability
## Feature Requests

To request a feature open a [GitHub issue](https://github.com/anayatkhan1/Multivo/issues).

 ## Contribution Guidelines

Thank you for considering contributing to our AI-powered podcast generator project! Please follow these guidelines to ensure smooth collaboration:

1. Fork the repository to your GitHub account.
2. Clone the forked repository to your local machine:
3. Create a new branch for your changes:

    ```bash
    git checkout -b feature/your-feature-name
    ```

4. Make your changes and ensure they adhere to the project's coding style and guidelines.
5. Test your changes thoroughly to avoid introducing bugs.
6. Commit your changes with clear and descriptive commit messages:

    ```bash
    git commit -m 'feat: Add your descriptive commit message'
    ```
    ``Note:`` Before committing changes, ensure you include one of these tags in your commit message: ```feat, fix, wip, patch, build```.

7. Push your changes to your forked repository:

    ```bash
    git push origin feature/your-feature-name
    ```

8. Open a pull request against the `main` branch of the original repository.
9. Provide a clear and concise description of your changes in the pull request, along with any relevant information.
10. Ensure your pull request passes all checks and tests before requesting a review.

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL='/sign-in'
NEXT_PUBLIC_CLERK_SIGN_UP_URL='/sign-up'
```

Replace the placeholder values with your actual Convex & Clerk credentials. You can obtain these credentials by signing up on the [Convex](https://www.convex.dev/) and [Clerk](https://clerk.com/) websites.
