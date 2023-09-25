import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage, setDefaultPagination, setOnePageData } from '../redux/slice/paginationSlice'
import axios from 'axios'

export default function Pagination() {

  const [pageCount, setPageCount] = useState(0);
  const { currentPage } = useSelector(state => state.pagination);
  const dispatch = useDispatch();

  const apiKey = '26eb8fe0ea17478b691097b4e10c4ac9';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
          params: {
            api_key: apiKey,
            page: currentPage + 1,
          },
        });
        dispatch(setOnePageData(response.data.results));
        setPageCount(response.data.total_pages)
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [currentPage]);



  useEffect(() => {
    return () => {
      dispatch(setDefaultPagination([]));
    }
  }, [])

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="pagination-wrap mt-30">
            <nav>

              <div className="d-flex justify-content-end mt70">
                <ReactPaginate
                  pageCount={pageCount}
                  forcePage={currentPage}
                  onPageChange={(event) => dispatch(setCurrentPage(event.selected))}
                  pageRangeDisplayed={1}
                  marginPagesDisplayed={1}
                  previousLabel={'Prev.'}
                  nextLabel={'Next'}
                  breakLabel={'...'}
                  breakClassName={'page_brack'}
                  breakLinkClassName={'page_brack_link'}
                  className={'pagination_class'}
                  pageClassName={'pagination_page'}
                  pageLinkClassName={'pagination_page_link'}
                  activeClassName={'active_page'}
                  previousLinkClassName={'previous_link'}
                  nextLinkClassName={'next_link'}
                  disabledLinkClassName={'disable_link'}
                />
              </div>
              {/* <ul>
                <li><a onClick={() => handlePageChange(page - 1)}>Previous</a></li>
                <li className="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a onClick={() => handlePageChange(page + 1)}>Next</a></li>
              </ul> */}
            </nav>
          </div>
        </div>
      </div>
      {/* <div className="d-flex justify-content-end mt70">
        <ReactPaginate
          pageCount={pageCount}
          forcePage={currentPage}
          onPageChange={(event) => dispatch(setCurrentPage(event.selected))}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          previousLabel={'Prev.'}
          nextLabel={'Next'}
          breakLabel={'...'}
          breakClassName={'page_brack'}
          breakLinkClassName={'page_brack_link'}
          className={'pagination_class'}
          pageClassName={'pagination_page'}
          pageLinkClassName={'pagination_page_link'}
          activeClassName={'active_page'}
          previousLinkClassName={'previous_link'}
          nextLinkClassName={'next_link'}
          disabledLinkClassName={'disable_link'}
        />
      </div> */}
    </>
  );
}