import CitiesTable from './components/CitiesTable'
import ForeCast from './components/ForeCast'
import Search from './components/Search'
import useForecast from './hooks/useForecast'

const App = (): JSX.Element => {
  const { forecast, options, term, onOptionSelect, onSubmit, onInputChange } =
    useForecast()

  return (
    <>
    <main className="flex justify-center items-center bg-gradient-to-br from-[#913639] via-[#226ba3] to-[#d2a985] w-full h-full">
      {forecast ? (
        <ForeCast data={forecast} />
      ) : (
        <div className="flex flex-col bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg">
          <Search
            term={term}
            options={options}
            onInputChange={onInputChange}
            onOptionSelect={onOptionSelect}
            onSubmit={onSubmit}
          />
          <CitiesTable />
        </div>
      )}
    </main>
    </>
  )
}

export default App
