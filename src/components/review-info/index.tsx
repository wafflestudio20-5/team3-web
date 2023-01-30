import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import Moment from 'react-moment';
import {
  Container,
  Img,
  Info,
  User,
  Desc,
  Type,
  Location,
  Time,
  Content,
  More,
} from './review-info.styled';
import { shortenLocation } from '../../utils/location';
import userImg from '../../assets/default-profile.png';

interface ReviewInfo {
  userId: number;
  img: string;
  username: string;
  type: string;
  location: string;
  createdAt: Date;
  content: string;
}

const ReviewInfo = ({
  userId,
  img,
  username,
  type,
  location,
  createdAt,
  content,
}: ReviewInfo) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Img
        src={img}
        onError={e => ((e.target as HTMLImageElement).src = userImg)}
        onClick={() => navigate(`/profile/${userId}`)}
      />
      <Info>
        <User onClick={() => navigate(`/profile/${userId}`)}>{username}</User>
        <Desc>
          <Type>{type === 'BUYER' ? '구매자' : '판매자'} · </Type>
          <Location>{shortenLocation(location)} · </Location>
          <Time>
            <Moment fromNow>{createdAt}</Moment>
          </Time>
        </Desc>
        <Content>{content ? content : '내용 없음'}</Content>
      </Info>
      {/* <More src={more} ref={dropDownRef} onClick={() => setIsDropped(true)} />
      {isDropped && (
        <DropDown
          dropDownRef={dropDownRef}
          isDropped={isDropped}
          setIsDropped={setIsDropped}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      {isModalOpen && (
        <DeleteModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          deleteReview={deleteReview}
        />
      )} */}
    </Container>
  );
};

export default ReviewInfo;
