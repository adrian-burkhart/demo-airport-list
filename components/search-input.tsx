import { Dispatch, FormEvent, FormEventHandler, SetStateAction } from 'react'

interface SearchInputProps {
  setFilter: Dispatch<SetStateAction<string>>
}

const SearchInput: React.FC<SearchInputProps> = ({ setFilter }) => {
  const handleChange = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // @ts-ignore
    setFilter(e.target.value)
  }

  return (
    <form onChange={handleChange} name='filter'>
      <input
        type='text'
        name='search'
        placeholder='Start typing...'
        className='bg-gray-100 border-gray-300 border rounded-lg px-2 py-3 w-full my-4'
      ></input>
    </form>
  )
}

export default SearchInput
