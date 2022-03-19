/**
 * Given a name, return the first two letters of the first and last name
 * @param name - The name of the person.
 * @param [fallback=?] - The default value to return if the name is not a string.
 * @returns The initials of the first and last name of the user.
 */
export default function getInitials(name, fallback = '?') {
  if (!name || typeof name !== 'string') return fallback
  return name
    .replace(/\s+/, ' ')
    .split(' ') // Repeated spaces results in empty strings
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase()) // Watch out for empty strings
    .join('')
}
