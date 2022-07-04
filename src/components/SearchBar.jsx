import SearchIcon from "@mui/icons-material/Search"
import CloseIcon from "@mui/icons-material/Close"
import React from "react"
export default function ({ placeholder, data }) {
  const [filteredData, setFilteredData] = React.useState([])
  const [searchWord, setSearchWord] = React.useState("")
  const handleFilter = (event) => {
    const searchWord = event.target.value
    setSearchWord(searchWord)
    let newFilter = []
    if (searchWord) {
      newFilter = data.filter((city) => {
        return city.nome.toLowerCase().includes(searchWord.toLowerCase())
      })
    }
    setFilteredData(newFilter)
  }
  function clearSearchWord () {
    setFilteredData([])
    setSearchWord("")
  }

  return (
    <form>
      <div className="searchInputs">
        <input
          className="input"
          type="text"
          placeholder={placeholder}
          onChange={handleFilter}
          name="cidade"
          value={searchWord}
        ></input>
        <div className="searchIcon">
          {searchWord ? <CloseIcon id="closeBtn" onClick={clearSearchWord}/> : <SearchIcon />}
        </div>
      </div>
      {filteredData.length > 0 && (
        <div className="dataResults">
          {filteredData.slice(0, 7).map((city, key) => {
            return (
              <div className="dataResult" key={key}>
                {`${city.nome} - ${city.estado}`}
              </div>
            )
          })}
        </div>
      )}
    </form>
  )
}
