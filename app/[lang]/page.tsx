import Home from '../page';

type Props = {
  params: Promise<{ lang: string }>;
};

export default async function LocalePage({ params }: Props) {
  // Await params to comply with Next.js 15 requirements
  await params;
  return <Home />;
}
