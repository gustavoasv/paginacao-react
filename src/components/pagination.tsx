export const Pagination = ( {setCurrentPage, page, currentPage}: any ) => {
    return <>
    
    <div>
        {Array.from(Array(page), (item, index) => {
          return (
            <button
              style={ index == currentPage ? {backgroundColor: 'grey'} : null}
              value={index}
              onClick={(e) => setCurrentPage(e.target.value)}
            >
              {index}
            </button>
          );
        })}
      </div>
    
    </>
}