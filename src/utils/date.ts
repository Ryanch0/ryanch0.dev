import { format } from 'date-fns'

export function formatLongDate(date: Date): string {
  return format(date, 'MMM dd, yyyy')
}

export function getDateParts(date: Date | string) {
  const dateObj = typeof date === 'string' ? new Date(date) : date

  return {
    year: format(dateObj, 'yyyy'),
    month: format(dateObj, 'MM'),
    day: format(dateObj, 'dd')
  }
}
