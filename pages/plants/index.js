import Link from 'next/link'
import plants from '../../src/data/plants'
import PlantCard from '../../src/components/PlantCard'

export default function PlantsPage() {
  return (
    <main className="container">
      <h1>Plant Catalog</h1>
      <div className="grid">
        {plants.map(p => (
          <PlantCard key={p.id} plant={p} />
        ))}
      </div>
    </main>
  )
}
