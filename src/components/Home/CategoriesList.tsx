import { useState } from 'react'
import Category from './Category'

const categories = [
  'All',
  'Live',
  'Gaming',
  'Music',
  'Linux distribution',
  'Comedy',
  'Pakistani dramas',
  'Gadgets',
  'Cars',
  'New for you',
  'Technology',
  'Politics',
  'Information Technology',
  'Vlogging',
  'Singing',
  'Movies',
]
const CategoriesList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  return (
    <header className='flex gap-3 h-[40px] mb-1 overflow-x-scroll scrollbar-hide'>
      {categories.map((category) => (
        <Category
          key={category}
          category={category}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      ))}
    </header>
  )
}

export default CategoriesList
