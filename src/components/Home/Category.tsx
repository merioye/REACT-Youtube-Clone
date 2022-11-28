import React, { MouseEvent } from 'react'

import { addRippleEffect } from '../../utils/shared/addRippleEffect.util'

type IProps = {
  category: string
  selectedCategory: string
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
}
const Category = ({ category, selectedCategory, setSelectedCategory }: IProps) => {
  const handleCategoryBtnClick = (e: MouseEvent<HTMLElement>) => {
    addRippleEffect(e)
    setSelectedCategory(category)
  }
  return (
    <button
      onClick={handleCategoryBtnClick}
      className={`para-regular iconBtn-bg hover:hover-color flex flex-none justify-center items-center px-3 rounded-lg h-8 min-w-3 transition-all duration-300 relative overflow-hidden ${
        selectedCategory === category
          ? 'active-category hover:bg-black hover:dark:bg-white'
          : 'font-normal'
      }`}
    >
      {category}
    </button>
  )
}

export default Category
