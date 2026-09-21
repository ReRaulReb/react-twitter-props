export default function Search({searchFilter, setSearchFilter}){

	return(
		<div className='search-section'>
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input className="search" value = {searchFilter}
                onChange = {(e) => setSearchFilter(e.target.value)}
                type="text" placeholder="Search Twitter" />
        </div>
	)
}
