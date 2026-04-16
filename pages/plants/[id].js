import { useRouter } from 'next/router'
import plants from '../../src/data/plants'
import SketchfabEmbed from '../../src/components/SketchfabEmbed'
import InfoCard from '../../src/components/InfoCard'

export default function PlantDetail() {
  const router = useRouter()
  const { id } = router.query
  const plant = plants.find(p => p.id === id)
  if (!plant) return <main className="container"><h2>Plant not found</h2></main>

  return (
    <main className="container">
      <h1>{plant.scientificName} <small>({plant.commonNames.join(', ')})</small></h1>
      <div className="detail-grid">
        <div className="viewer">
          <SketchfabEmbed html={plant.sketchfabEmbed} />
        </div>
        <div className="meta">
          <p className="lead">{plant.description}</p>
          <div className="info-cards">
            <InfoCard title="Uses" tone="positive">
              <ul>
                {plant.uses.map((u,i) => (
                  <li key={i}><strong>{u.condition}</strong>: {u.traditionalUse} — {u.preparation}</li>
                ))}
              </ul>
            </InfoCard>

            <InfoCard title="Medicines / Preparations" tone="neutral">
              <ul>
                {plant.medicines?.map((m,i) => <li key={i}>{m}</li>)}
              </ul>
            </InfoCard>

            <InfoCard title="Areas Found" tone="neutral">
              <ul>
                {plant.areasFound?.map((a,i) => <li key={i}>{a}</li>)}
              </ul>
            </InfoCard>

            <InfoCard title="Precautions" tone="warning">
              <div className="precaution">{plant.precautions}</div>
            </InfoCard>
          </div>
        </div>
      </div>
    </main>
  )
}
