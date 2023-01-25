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
import DropDown from '../drop-down';
import DeleteModal from '../delete-modal';
import userImg from '../../../../assets/profile.svg';
import more from '../../../../assets/more.svg';

interface ReviewInfo {
  id: number;
  userId: number;
  img: string;
  username: string;
  type: string;
  location: string;
  createdAt: Date;
  content: string;
  removeReview: (reviewId: number) => void;
}

const ReviewInfo = ({
  id,
  userId,
  img,
  username,
  type,
  location,
  createdAt,
  content,
  removeReview,
}: ReviewInfo) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropped, setIsDropped] = useState(false);
  const dropDownRef = useRef<any>();
  const deleteReview = () => {
    removeReview(id);
  };
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
          <Type>{type} · </Type>
          <Location>{location} · </Location>
          <Time>
            <Moment fromNow>{createdAt}</Moment>
          </Time>
        </Desc>
        <Content>{content}</Content>
      </Info>
      <More src={more} ref={dropDownRef} onClick={() => setIsDropped(true)} />
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
      )}
    </Container>
  );
};

export default ReviewInfo;
