import profile from '@/data/profile.json'

// "Regi Al Habib" -> "R.A.H"
const initials = profile.name.split(' ').map((word) => word[0]).join('.')

export { initials }
