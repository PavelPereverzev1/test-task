import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectNotices,
  selectIsLoading,
  selectQuery,
} from '../../redux/notices/noticesSelectors';
// import { setPage } from '../../redux/notices/noticeSlice';
import { fetchNotices } from '../../redux/notices/noticeOperations';
import Loader from '../Loader/Loader';
import NoticeItem from '../NoticeItem/NoticeItem';
import { Container } from './NoticeList.styled';

const NoticesList = () => {
  const notices = useSelector(selectNotices);
  const query = useSelector(selectQuery);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotices(query));
  }, [dispatch, query]);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        notices.map(notice => {
          return <NoticeItem key={notice.id} item={notice} />;
        })
      )}
    </Container>
  );
};

export default NoticesList;
