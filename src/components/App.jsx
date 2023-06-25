import React, { useState, useEffect } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal';
import { Loader } from './Loader/Loader';
import { getPhotos } from 'api/getPhotos';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export function App() {
  const [rendStatus, setStatus] = useState(STATUS.IDLE);
  const [searchText, setSearchText] = useState('');
  const [query, setQuery] = useState([]);
  const [page, setPage] = useState(1);
  const [photosOnPage, setPhotosOnPage] = useState(12);
  const [error, setError] = useState('');
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowButton, setIsShowButton] = useState(false);
  const [photoForModal, setPhotoForModal] = useState({
    largeImageURL: '',
    title: '',
    id: '',
  });

  const handleSearch = value => {
    setSearchText(value);
    setQuery([]);
    setPage(1);
    setError('');
    setIsShowModal(false);
    setIsShowButton(false);
    setPhotoForModal({ largeImageURL: '', title: '', id: '' });
  };

  const handleButton = () => {
    setPage(prev => prev + 1);
  };

  const openModal = (urlForModal, title, id) => {
    setIsShowModal(true);
    setPhotoForModal({ largeImageURL: urlForModal, title: title, id: id });
  };

  const closeModal = () => {
    setIsShowModal(false);
    setPhotoForModal({ largeImageURL: '', title: '', id: '' });
  };

  const fetchPhotos = async () => {
    await getPhotos(searchText, page)
      .then(data => {
        if (data.totalHits === 0) {
          setError('No matches found');
          setStatus(STATUS.REJECTED);
        }

        if (page * photosOnPage < data.totalHits) {
          setIsShowButton(true);
        } else {
          setIsShowButton(false);
        }

        setQuery(prev => [...prev, ...data.hits]);
        setStatus(STATUS.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(STATUS.REJECTED);
      });
  };

  useEffect(() => {
    if (searchText === '') {
      return;
    }

    fetchPhotos();
    setStatus(STATUS.PENDING);
  }, [searchText, page]);

  if (rendStatus === STATUS.IDLE) {
    return <Searchbar onSearch={handleSearch} />;
  }

  if (rendStatus === STATUS.PENDING) {
    return (
      <>
        <Searchbar onSearch={handleSearch} />
        <ImageGallery gallery={query} onClick={openModal} />
        <Loader />;
      </>
    );
  }

  if (rendStatus === STATUS.RESOLVED) {
    return (
      <>
        <Searchbar onSearch={handleSearch} />
        <ImageGallery gallery={query} onClick={openModal} />
        {isShowButton && <Button handleButton={handleButton} />}
        {isShowModal && (
          <Modal onClick={closeModal} modalContent={photoForModal} />
        )}
      </>
    );
  }

  if (rendStatus === STATUS.REJECTED) {
    return (
      <>
        <Searchbar onSearch={handleSearch} />
        <h1>{error}</h1>
      </>
    );
  }
}
