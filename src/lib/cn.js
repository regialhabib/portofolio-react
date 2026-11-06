import clsx from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

// Daftarkan token kustom supaya kelas yang ditulis belakangan menang (mis. Card bg-surface → bg-pink)
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      shadow: [{ shadow: ['pop-sm', 'pop-md', 'pop', 'pop-hover', 'pop-lg'] }],
    },
  },
})

export const cn = (...inputs) => twMerge(clsx(inputs))
