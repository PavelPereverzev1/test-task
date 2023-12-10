import { useDispatch, useSelector } from 'react-redux';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useEffect, useState } from 'react';

import {
  selectNotices,
  selectIsLoading,
} from '../../redux/notices/noticesSelectors';
import { fetchNotices } from '../../redux/notices/noticeOperations';
import Loader from '../Loader/Loader';
import NoticeItem from '../NoticeItem/NoticeItem';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ModalNotice from '../ModalNotice/ModalNotice';
import { Container } from './NoticeList.styled';

const NoticesList = () => {
  const notices = useSelector(selectNotices);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentNotice, setCurrentNotice] = useState({});
  const [page, setPage] = useState(1);
  const isLoading = useSelector(selectIsLoading);
  const body = document.querySelector('body');
  const [isActive, setIsActive] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (notices.length === 0) {
      dispatch(fetchNotices(page));
    }
  }, [dispatch, page, notices]);

  useEffect(() => {
    if (notices.length > 0 && notices.length % 12) {
      setIsActive(false);
    }
  }, [notices.length]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
    dispatch(fetchNotices(page + 1));
  };
  const openModal = item => {
    setIsModalOpen(true);
    setCurrentNotice(item);
    disableBodyScroll(body);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    enableBodyScroll(body);
  };
  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        notices.map(item => {
          return <NoticeItem key={item.id} item={item} openModal={openModal} />;
        })
      )}
      {isActive && !isLoading ? (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      ) : null}
      {isModalOpen && (
        <ModalNotice closeModal={closeModal} item={currentNotice} />
      )}
    </Container>
  );
};

export default NoticesList;
