import Link from 'next/link'
import Image from 'next/image'

export default function PlantCard({ plant }){
  const thumb = plant.images && plant.images[0]
  return (
    <Link href={`/plants/${plant.id}`} className="plant-card">
      <div className="thumb">
        {thumb ? (
          <Image src={thumb} alt={plant.scientificName} width={640} height={360} style={{objectFit:'cover'}} />
        ) : (
          <div className="placeholder">3D</div>
        )}
      </div>
      <div className="body">
        <h3 className="title">{plant.scientificName}</h3>
        <p className="meta">{plant.commonNames.join(', ')}</p>
        <div className="tags">{plant.tags?.slice(0,3).map(t => <span key={t} className="tag">{t}</span>)}</div>
      </div>
    </Link>
  )
}
