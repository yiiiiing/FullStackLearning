const CountryForm = ({countryFilter, onFilterChange}) => {
    return (
        <form>
            find countries
            <input value={countryFilter} onChange={onFilterChange} />
        </form>
    )   
}

export default CountryForm