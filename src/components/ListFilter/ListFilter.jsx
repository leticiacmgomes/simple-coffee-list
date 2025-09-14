import './ListFilter.css'

export const ListFilter = ({ filter, setFilter }) => {
    return(
        <div className="list-filter">
            <button onClick={() => setFilter('all')} className={`${filter === 'all' ? 'active' : ''}`}>All Products</button>
            <button onClick={() => setFilter('available')} className={`${filter === 'available' ? 'active' : ''}`}>Available Now</button>
        </div>
    )
}