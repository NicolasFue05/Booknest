export default function ProgressBar({ current, limit }) {
  const progress = (current / limit) * 100 // Calcula el porcentaje
  const barWidth = (current / limit) * 220 // Calcula el ancho relativo a 220px

  return (
    <div className="flex flex-row gap-x-2 mt-4">
      <span className="font-bold">Progress:</span>
      <div className="bg-soft-blue rounded-xl border-blue-800 w-[220px] max-w-[220px] h-6">
        <div
          className="bg-blue-800 h-6 rounded-xl transition-all duration-300"
          style={{ width: `${barWidth}px` }} // Ancho dinámico
        ></div>
      </div>
      <span className="font-bold">{progress.toFixed(1)}%</span>
    </div>
  )
}
