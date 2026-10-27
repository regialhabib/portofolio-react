import { Entity } from '@/components/schema/Entity'
import resume from '@/data/resume.json'

const historyRows = [...resume.experience, ...resume.education]

function HistorySection() {
  return (
    <section id="riwayat" className="mx-auto max-w-[1160px] scroll-mt-20 px-6 pb-24" aria-labelledby="riwayat-title">
      <h2 id="riwayat-title" className="mb-7 text-4xl leading-none font-extrabold tracking-[-0.03em] sm:text-[46px]">Riwayat</h2>
      {/* HP: setiap baris tabel ditumpuk jadi kartu; layar lebar: tabel biasa. */}
      <div className="border-[1.5px] border-foreground bg-card">
        <table className="w-full border-collapse text-base leading-normal">
          <thead className="hidden sm:table-header-group">
            <tr className="bg-foreground text-left font-mono text-[13px] text-white">
              <th scope="col" className="px-4 py-2.5 font-medium">periode</th>
              <th scope="col" className="px-4 py-2.5 font-medium">posisi</th>
              <th scope="col" className="px-4 py-2.5 font-medium">catatan</th>
            </tr>
          </thead>
          <tbody>
            {historyRows.map((row) => (
              <tr key={row.title} className="block border-b border-line align-top last:border-b-0 sm:table-row">
                <td className="block px-4 pt-4 font-mono text-[13px] text-muted sm:table-cell sm:py-4 sm:text-sm sm:whitespace-nowrap sm:text-foreground">{row.period}</td>
                <td className="block px-4 pt-1 font-semibold sm:table-cell sm:w-[30%] sm:py-4">{row.title}</td>
                <td className="block px-4 pt-1 pb-4 text-body sm:table-cell sm:py-4">{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Entity name="sertifikasi" meta={`${resume.certifications.length} baris`} className="mt-7">
        <ul>
          {resume.certifications.map((certification) => <li key={certification} className="border-b border-line px-4 py-3 text-[15px] last:border-b-0">{certification}</li>)}
        </ul>
      </Entity>
    </section>
  )
}

export { HistorySection }
