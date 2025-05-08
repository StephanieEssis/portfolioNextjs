export default function About() {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold text-center mb-10">À propos de moi</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Mon parcours</h2>
            <p className="mb-4 text-sm">
            Bonjour ! Je suis un développeur Full-Stack Junior passionnée par la création d'applications web interactives et dynamiques.
          Avec une solide formation en développement front-end, je m'efforce de créer des expériences utilisateur intuitives et performantes.
      </p>
            <p className="text-sm">
              Passionnée par les technologies modernes comme <span className="font-bold text-purple-800">React, Next.js, Node.js</span>.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Mes compétences</h2>
            <ul className="space-y-2">
              <li className="font-bold">Frontend : <span className="text-purple-800" >HTML, CSS, JavaScript, React, Next.js</span> </li>
              <li className="font-bold">Backend : <span className="text-purple-800" > Node.js</span> </li>
              <li className="font-bold">Database : <span className="text-purple-800" >MySQL, SQLite, NoSql, MongoDB, oracle Database</span> </li>
            </ul>
          </div>
        </div>
        {/* <button className="mt-20 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-red-600">Télécharger CV</button>
       */}
      </div>
    )
  }