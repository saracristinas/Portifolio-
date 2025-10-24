import Hero from '../components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="container mx-auto p-6">
        <h1 className="text-2xl font-bold">Meu Portfólio</h1>
      </header>
      <section className="flex-1 container mx-auto p-6">
        <Hero />
      </section>
      <footer className="container mx-auto p-6 text-sm text-gray-500">© {new Date().getFullYear()}</footer>
    </main>
  );
}
