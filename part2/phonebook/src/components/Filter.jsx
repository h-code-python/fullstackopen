const Filter = () => {
    return(
        <form>
            <div>
            filter shown with: 
                    <input 
                    value={filterName} 
                    onChange={handleFilterChange} />
            </div>
        </form>
    )
}