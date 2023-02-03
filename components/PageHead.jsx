import Head from 'next/head';
export default function PageHead({name, description}) {
  return (
      <Head>
        <title>{name}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  )
}