import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNotices } from '../../redux/notices/noticesSelectors';
import { selectFilter } from '../../redux/filter/filterSelectors';
import { fetchNotices } from '../../redux/notices/noticeOperations';
import Filter from '../../components/Filter/Filter';
import NoticesList from '../../components/NoticesList/NoticesList';
import noticesFilter from '../../helpers/noticesFilter';

const Catalogue = () => {
  const notices = useSelector(selectNotices);
  const filter = useSelector(selectFilter);
  const [filtredData, setFiltredData] = useState(notices);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  console.log(filter);

  useEffect(() => {
    if (notices.length === 0) {
      dispatch(fetchNotices(page));
    }
  }, [dispatch, page, notices]);

  useEffect(() => {
    setFiltredData(noticesFilter(notices, filter));
  }, [filter, notices]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
    dispatch(fetchNotices(page + 1));
  };
  return (
    <>
      <div>
        <Filter />
        <NoticesList notices={filtredData} handleLoadMore={handleLoadMore} />
      </div>
    </>
  );
};

export default Catalogue;
