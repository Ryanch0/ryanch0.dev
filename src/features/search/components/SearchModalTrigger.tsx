'use client'

import { useState } from 'react'

import SearchModal from '@/features/search/components/SearchModal'

const SearchModalTrigger = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  return (
    <div>
      <button onClick={openModal}>Search</button>
      <SearchModal isOpen={isOpen} onClose={onClose} />
    </div>
  )
}

export default SearchModalTrigger
