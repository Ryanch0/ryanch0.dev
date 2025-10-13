import { format } from 'date-fns'

export function formatLongDate(date: Date): string {
  return format(date, 'MMMM do, yyyy') // "August 18th, 2025"
}
