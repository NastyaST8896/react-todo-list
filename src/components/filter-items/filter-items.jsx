import './filter-items.css';

const FilterItems = ({ filter, counter, onFilterChange, onDelete }) => {

    return (
        <div className="filter-items">
            <span> { counter } items left</span>

            <div className="filters">
                <button
                    className={ `filter-btn ${ filter === 'All' ? 'active' : '' }` }
                    onClick={ () => onFilterChange('All') }
                >
                    All
                </button>

                <button
                    className={ `filter-btn ${ filter === 'Active' ? 'active' : '' }` }
                    onClick={ () => onFilterChange('Active') }
                >
                    Active
                </button>

                <button
                    className={ `filter-btn ${ filter === 'Completed' ? 'active' : '' }` }
                    onClick={ () => onFilterChange('Completed') }
                >
                    Completed
                </button>
            </div>

            <button className="clear-completed" onClick={ onDelete }>Clear completed</button>
        </div>
    );
};

export default FilterItems;