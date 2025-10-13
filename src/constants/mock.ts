import { formatLongDate } from '@/utils/date'

export const MOCK_POST_DETAIL = {
  id: 'post_id',
  title: 'POST TITLE',
  date: formatLongDate(new Date()),
  last_modified: formatLongDate(new Date())
}

export const MOCK_POST_LIST = [
  {
    id: 1,
    title: 'Post1',
    date: 'August 18th, 2025',
    last_modified: 'September 27th, 2025',
    preview: 'PREVIEW',
    contents: 'MARKDOWN ...',
    tags: ['react', 'css'],
    meta_description: 'for meta-description'
  },
  {
    id: 2,
    title: 'Post2',
    date: 'August 18th, 2025',
    last_modified: 'September 27th, 2025',
    preview: 'PREVIEW',
    contents: 'MARKDOWN ...',
    tags: ['react', 'css'],
    meta_description: 'for meta-description'
  },
  {
    id: 3,
    title: 'Post3',
    date: 'August 18th, 2025',
    last_modified: 'September 27th, 2025',
    preview: 'PREVIEW',
    contents: 'MARKDOWN ...',
    tags: ['react', 'css'],
    meta_description: 'for meta-description'
  },
  {
    id: 4,
    title: 'Post4',
    date: 'August 18th, 2025',
    last_modified: 'September 27th, 2025',
    preview: 'PREVIEW',
    contents: 'MARKDOWN ...',
    tags: ['react', 'css'],
    meta_description: 'for meta-description'
  }
]

export const MOCK_TAG_LIST = [
  'react',
  'next',
  'css',
  'tailwind',
  'optimization',
  'whatelse'
]
