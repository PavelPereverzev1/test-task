import { useState } from 'react';
import { useSelector } from 'react-redux';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { selectNotices } from '../../redux/notices/noticesSelectors';
import { selectFavorites } from '../../redux/favorites/favoritesSelector';
import NoticeItem from '../../components/NoticeItem/NoticeItem';
import ModalNotice from '../../components/ModalNotice/ModalNotice';
import { Container } from './Favorites.styled';

const Favorite = () => {
  const notices = useSelector(selectNotices);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentNotice, setCurrentNotice] = useState({});
  const body = document.querySelector('body');
  const favorites = useSelector(selectFavorites);

  const favoriteNotices = notices.filter(notice =>
    favorites.includes(notice.id)
  );
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
      {favoriteNotices.map(item => {
        return <NoticeItem key={item.id} item={item} openModal={openModal} />;
      })}
      {isModalOpen && (
        <ModalNotice closeModal={closeModal} item={currentNotice} />
      )}
    </Container>
  );
};

export default Favorite;
