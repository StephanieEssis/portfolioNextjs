import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Film box",
      description: "Une application pour choisir et connaitre la description des films.",
      imageUrl: "/images/cinema.avif",
    },
    {
      id: 2,
      title: "Boutique e-commerce",
      description: "C'est une boutique en ligne pour la vente de maroquinerie de luxe.",
      imageUrl: "/images/comerce.avif",
    
    },
    {
      id: 3,
      title: "une application météo",
      description: "une application qui donne la météo, la desrciption et la température du lieu indiqué.",
      imageUrl: "/images/meteo2.avif",
    },
    {
      id: 4,
      title: "gestion de budget",
      description: "une application capable de connaitre sa frequence de dépense.",
      imageUrl: "/images/budget.avif",
    }
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">Mes projets</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}