/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useEffect, useState } from 'react';

import { selectIsLoading } from '../../redux/notices/noticesSelectors';
import Loader from '../Loader/Loader';
import NoticeItem from '../NoticeItem/NoticeItem';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ModalNotice from '../ModalNotice/ModalNotice';
import { Container } from './NoticeList.styled';

const NoticesList = ({ notices, handleLoadMore }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentNotice, setCurrentNotice] = useState({});
  const isLoading = useSelector(selectIsLoading);
  const body = document.querySelector('body');
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (notices.length > 0 && notices.length % 12) {
      setIsActive(false);
      return;
    }
    setIsActive(true);
  }, [notices.length]);

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
