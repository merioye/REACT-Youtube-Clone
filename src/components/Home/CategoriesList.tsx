import { useState } from 'react'

import Category from './Category'
import { categories } from '../../data/categories'

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
