This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Umbraco GraphQL (headless) integration

This app includes a tiny server-side fetcher for Umbraco GraphQL. To use it on
the homepage, create a `.env.local` file (or copy `.env.local.example`) and set:

- `UMBRACO_GRAPHQL_URL` — the full URL of your Umbraco GraphQL endpoint (e.g., `https://cms.example.com/graphql`).
- (optional) `UMBRACO_GRAPHQL_QUERY` — a GraphQL query string to run on the homepage. If omitted, a small sample query is used.

Example query you can paste into `UMBRACO_GRAPHQL_QUERY` (single-line or escaped):

```
query Sample { settings { title } }
```

Start the dev server and open the homepage. The page will show the fetched JSON
or helpful errors when configuration is missing.
# next-headless
