import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from '../components/Navbar';
import { getNewArticle } from '../redux/actions/actions';

const ContohPage = () => {
  const dispatch = useDispatch();

  const getNewArticledata = useSelector(state => state.getNewArticle);
  console.log(getNewArticledata);

  useEffect(() => {
    dispatch(getNewArticle(1));
  }, []);

  return (
    <>
      <Navbar />

      <main className="first-section">
        <div className="container">
          {getNewArticledata.isLoading ? (
            <>
              <div>loading</div>
            </>
          ) : getNewArticledata.isError ? (
            <>
              <div>internal server error</div>
            </>
          ) : (
            <>
              <div>
                <h1>{getNewArticledata?.data?.headquarters}</h1>
                <p>{getNewArticledata?.data?.name}</p>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default ContohPage;
