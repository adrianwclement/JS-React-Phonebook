const Filter = ({ searchTerm, handleFilter}) => (
    <form>
    <div>
      filter shown with
        <input 
          value={searchTerm}
          onChange={handleFilter}
        />
    </div>
  </form>
)

export default Filter