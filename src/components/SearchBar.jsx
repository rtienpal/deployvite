import SearchIcon from "@mui/icons-material/Search"
import React from "react"
export default function ({ placeholder, data }) {
  const [filteredData, setFilteredData] = React.useState([])
  const handleFilter = (event) => {
    const searchWord = event.target.value
    let newFilter = []
    if (searchWord) {
      newFilter = data.filter((city) => {
        return city.nome.toLowerCase().includes(searchWord.toLowerCase())
      })
    }
    setFilteredData(newFilter)
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
        ></input>
        <div className="searchIcon">
          <SearchIcon />
        </div>
      </div>
      {filteredData.length > 0 && (
        <div className="dataResults">
          {filteredData.slice(0,5).map((city, key) => {
            return (
              <div className="dataResult" key={key}>
                {`${city.nome}, ${city.estado}`}
              </div>
            )
          })}
        </div>
      )}
    </form>
  )
}
