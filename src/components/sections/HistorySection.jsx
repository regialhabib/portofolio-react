import { Entity } from '@/components/schema/Entity'
import resume from '@/data/resume.json'

const historyRows = [...resume.experience, ...resume.education]

function HistorySection() {
  return (
    <section id="riwayat" className="mx-auto max-w-[1160px] scroll-mt-20 px-6 pb-24" aria-labelledby="riwayat-title">
      <h2 id="riwayat-title" className="mb-7 text-4xl leading-none font-extrabold tracking-[-0.03em] sm:text-[46px]">Riwayat</h2>
      <div className="overflow-x-auto border-[1.5px] border-foreground bg-card">
        <table className="w-full min-w-[720px] border-collapse text-base leading-normal">
          <thead>
            <tr className="bg-foreground text-left font-mono text-[13px] text-white">
              <th scope="col" className="px-4 py-2.5 font-medium">periode</th>
              <th scope="col" className="px-4 py-2.5 font-medium">posisi</th>
              <th scope="col" className="px-4 py-2.5 font-medium">catatan</th>
            </tr>
          </thead>
          <tbody>
            {historyRows.map((row) => (
              <tr key={row.title} className="border-b border-line align-top last:border-b-0">
                <td className="px-4 py-4 font-mono text-sm whitespace-nowrap">{row.period}</td>
                <td className="px-4 py-4 font-semibold">{row.title}</td>
                <td className="px-4 py-4 text-body">{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Entity name="sertifikasi" meta={`${resume.certifications.length} baris`} className="mt-7">
        <ul className="grid sm:grid-cols-2">
          {resume.certifications.map((certification) => <li key={certification} className="border-b border-line px-4 py-3 text-[15px]">{certification}</li>)}
        </ul>
      </Entity>
    </section>
  )
}

export { HistorySection }
