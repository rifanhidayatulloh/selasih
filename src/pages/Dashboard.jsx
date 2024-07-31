import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Sidebar from '../components/Sidebar';
import NavbarAdmin from '../components/NavbarAdmin';

import { getMovie } from '../redux/actions/movie';

const Dashboard = () => {
  const dispatch = useDispatch();

  const allMovie = useSelector(state => {
    return state.getMovie;
  });

  // ------------------------------mounting---------------------
  useEffect(() => {
    dispatch(getMovie());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <main className="h-screen flex">
        <div className="w-20%">
          <Sidebar />
        </div>

        <div className="w-80% bg-[#F5F8FA] scrollbar overflow-y-scroll">
          <NavbarAdmin />

          <section className="pr-[50px] pl-4 py-5">
            {allMovie?.isLoading ? (
              <div>Loading...</div>
            ) : allMovie?.isError ? (
              <div>Server Error</div>
            ) : (
              <div className="grid grid-cols-12 gap-5">
                {allMovie.data.results?.map((item, index) => (
                  <div className="col-span-4 bg-white rounded-lg overflow-hidden" key={index + 1}>
                    <div>
                      <img src={`https://image.tmdb.org/t/p/w342${item.backdrop_path}`} alt="gambar" />
                    </div>
                    <div className="px-4 py-2">
                      <div className="flex justify-between mb-3">
                        <h1 className="text-[#212529] font-semibold">{item.title}</h1>
                        <div className="flex gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4 text-red-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                            />
                          </svg>
                          <p className="text-[#495057] mb-3 text-[11px]">{item.popularity}</p>
                        </div>
                      </div>
                      <p className="line-clamp-6 text-[#495057] mb-3 text-[13px]">{item.overview}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
