export default function DestinationCard({ title, subtitle, img }: { title: string; subtitle: string; img: string }) {
  return (
    <div className="card border-0 shadow-sm overflow-hidden h-100">
      <img src={img} alt={title} className="card-img-top object-fit-cover" style={{height: 220}} />
      <div className="card-body">
        <h5 className="card-title mb-1">{title}</h5>
        <div className="text-muted">{subtitle}</div>
      </div>
    </div>
  );
}
