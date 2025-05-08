import Image from 'next/image'


export default function ProjectCard({ title, description, imageUrl }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <Image 
        src={imageUrl} 
        alt={title} 
        width={400} 
        height={300} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
      </div>
    </div>
  )
}