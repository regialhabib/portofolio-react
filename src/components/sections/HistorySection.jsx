import { Entity } from '@/components/schema/Entity'
import resume from '@/data/resume.json'

const historyRows = [...resume.experience, ...resume.education]

function HistorySection() {
  return (
    <section id="riwayat" className="mx-auto max-w-[1160px] scroll-mt-20 px-6 pb-16" aria-labelledby="riwayat-title">
      <h2 id="riwayat-title" className="mb-6 text-3xl leading-[1.05] font-extrabold tracking-[-0.025em] sm:text-4xl">Riwayat</h2>
      {/* HP: setiap baris tabel ditumpuk jadi kartu; layar lebar: tabel biasa. */}
      <div className="border-[1.5px] border-foreground bg-card">
        <table className="w-full border-collapse text-[15px] leading-normal">
          <thead className="hidden sm:table-header-group">
            <tr className="bg-foreground text-left font-mono text-xs text-white">
              <th scope="col" className="px-4 py-2.5 font-medium">periode</th>
              <th scope="col" className="px-4 py-2.5 font-medium">posisi</th>
              <th scope="col" className="px-4 py-2.5 font-medium">catatan</th>
            </tr>
          </thead>
          <tbody>
            {historyRows.map((row) => (
              <tr key={row.title} className="block border-b border-line align-top last:border-b-0 sm:table-row">
                <td className="block px-4 pt-4 font-mono text-[13px] text-muted sm:table-cell sm:py-3 sm:text-[13px] sm:whitespace-nowrap sm:text-foreground">{row.period}</td>
                <td className="block px-4 pt-1 font-semibold sm:table-cell sm:w-[30%] sm:py-3">{row.title}</td>
                <td className="block px-4 pt-1 pb-4 text-body sm:table-cell sm:py-3">{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Entity name="sertifikasi" meta={`${resume.certifications.length} baris`} className="mt-6">
        <ul>
          {resume.certifications.map((certification) => <li key={certification} className="border-b border-line px-4 py-2.5 text-sm last:border-b-0">{certification}</li>)}
        </ul>
      </Entity>
    </section>
  )
}

export { HistorySection }
