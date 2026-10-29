import { useMemo, useState } from 'react'

const MIXES = [
  { id: '1-1.5-3', label: '1 : 1.5 : 3 — columns, beams, slabs', c: 1, s: 1.5, a: 3 },
  { id: '1-2-4', label: '1 : 2 : 4 — general structural concrete', c: 1, s: 2, a: 4 },
  { id: '1-3-6', label: '1 : 3 : 6 — footings, blinding, mass fill', c: 1, s: 3, a: 6 },
]

const DRY_VOLUME_FACTOR = 1.54
const CEMENT_BAG_VOLUME_M3 = 0.035

export default function ConcreteCalculator() {
  const [volume, setVolume] = useState('1')
  const [mixId, setMixId] = useState(MIXES[1].id)

  const mix = MIXES.find((m) => m.id === mixId)

  const result = useMemo(() => {
    const wetVolume = Number.parseFloat(volume)
    if (!Number.isFinite(wetVolume) || wetVolume <= 0) return null

    const dryVolume = wetVolume * DRY_VOLUME_FACTOR
    const parts = mix.c + mix.s + mix.a

    const cementVolume = (dryVolume * mix.c) / parts
    const sandVolume = (dryVolume * mix.s) / parts
    const ballastVolume = (dryVolume * mix.a) / parts

    return {
      bags: Math.ceil(cementVolume / CEMENT_BAG_VOLUME_M3),
      sand: Math.round(sandVolume * 100) / 100,
      ballast: Math.round(ballastVolume * 100) / 100,
    }
  }, [volume, mix])

  return (
    <div className="border-2 border-char bg-white p-6 sm:p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="font-display text-sm font-bold uppercase tracking-wide text-char">
            Volume of concrete needed (m&sup3;)
          </span>
          <input
            type="number"
            min="0"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            className="mt-2 w-full border-2 border-char bg-rebar-50 px-4 py-3 font-display text-lg font-bold focus:border-lion focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="font-display text-sm font-bold uppercase tracking-wide text-char">Mix ratio</span>
          <select
            value={mixId}
            onChange={(e) => setMixId(e.target.value)}
            className="mt-2 w-full border-2 border-char bg-rebar-50 px-4 py-3 font-body text-sm font-semibold focus:border-lion focus:outline-none"
          >
            {MIXES.map((m) => (
              <option key={m.id} value={m.id}>
                {m.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {result ? (
        <div className="mt-8 grid gap-4 border-t-2 border-rebar-200 pt-8 sm:grid-cols-3">
          <Stat label="Cement bags (50kg)" value={result.bags} />
          <Stat label="Sand" value={`${result.sand} m³`} />
          <Stat label="Ballast" value={`${result.ballast} m³`} />
        </div>
      ) : (
        <p className="mt-8 border-t-2 border-rebar-200 pt-8 text-sm text-steel-500">
          Enter a volume above to see estimated material quantities.
        </p>
      )}

      <p className="mt-6 text-xs italic text-steel-500">
        Estimate only, based on a {DRY_VOLUME_FACTOR}x dry-volume allowance. On-site yields vary with aggregate
        moisture and compaction &mdash; confirm exact quantities with your site engineer before a large pour.
      </p>
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className="border-2 border-rebar-200 p-4 text-center">
      <p className="font-display text-3xl font-extrabold text-lion">{value}</p>
      <p className="mt-1 font-display text-xs font-bold uppercase tracking-wide text-steel-500">{label}</p>
    </div>
  )
}
