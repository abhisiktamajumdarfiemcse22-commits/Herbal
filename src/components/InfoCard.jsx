export default function InfoCard({ title, children, tone = 'neutral' }){
  return (
    <section className={`info-card info-${tone}`}>
      <h4>{title}</h4>
      <div className="info-body">{children}</div>
    </section>
  )
}
