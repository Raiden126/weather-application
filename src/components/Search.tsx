import { ChangeEvent } from 'react'

import Header from './Header'
import Suggestions from './Suggestions'

import { optionType } from './../types/index'

type Props = {
  term: string
  options: []
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  onOptionSelect: (option: optionType) => void
  onSubmit: () => void
}

const Search = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props) => (
  <section className="w-full md:max-w-full p-4 flex flex-col text-center items-center text-zinc-700">
    <Header />

    <div className="relative flex mt-10 md:mt-4">
      <input
        type="text"
        value={term}
        className="px-2 py-1 rounded-l-md border-2 border-white"
        onChange={onInputChange}
      />

      <Suggestions options={options} onSelect={onOptionSelect} />

      <button
        className="rounded-r-md border-2 border-zinc-100 hover:border-red-300 hover:text-red-300 text-zinc-100 px-2 py-1 cursor-pointer"
        onClick={onSubmit}
      >
        search
      </button>
    </div>
  </section>
)

export default Search
