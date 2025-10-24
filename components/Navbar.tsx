"use client";

import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="w-full border-b py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="font-bold">Meu Nome</div>
        <div className="flex items-center gap-4">
          <a href="/projects" className="hover:underline">Projetos</a>
          <a href="/about" className="hover:underline">Sobre</a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
