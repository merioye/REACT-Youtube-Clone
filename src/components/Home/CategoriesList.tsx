import Category from './Category'
import { categories } from '../../data/categories'

type IProps = {
  selectedCategory: string
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
}
const CategoriesList = ({ selectedCategory, setSelectedCategory }: IProps) => {
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
