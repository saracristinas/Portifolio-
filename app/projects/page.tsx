import ProjectCard from '../../components/ProjectCard';

export default function ProjectsPage() {
  const projects = [
    { title: 'Loja X', description: 'E-commerce moderno com React + Next', country: 'BR' },
    { title: 'App Y', description: 'Aplicativo mobile PWA', country: 'US' },
    { title: 'Website Z', description: 'Landing page com animações', country: 'PT' }
  ];

  return (
    <section className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Projetos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(p => (
          <ProjectCard key={p.title} title={p.title} description={p.description} countryCode={p.country} />
        ))}
      </div>
    </section>
  );
}
