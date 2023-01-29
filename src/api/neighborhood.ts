import axios from 'axios';
import { toast } from 'react-toastify';
import { auth } from '.';
import { BASE_URL } from '../constant';
import { neighborPostComment, neighborPostInput } from '../types/neighborhood';

export const requestNeighborhood = async (
  accessToken: string,
  page: number,
  keyword: string,
) => {
  try {
    if (keyword === '') {
      return await axios.get(`${BASE_URL}/neighborhood/?page=${page}`, {
        headers: auth(accessToken),
      });
    } else {
      return await axios.get(
        `${BASE_URL}/neighborhood/?page=${page}&keyword=${keyword}`,
        {
          headers: auth(accessToken),
        },
      );
    }
  } catch (e) {
    return e;
  }
};

export const requestPostNeighborhood = async (
  { title, content }: neighborPostInput,
  accessToken: string,
) => {
  try {
    return await axios.post(
      `${BASE_URL}/neighborhood`,
      { title: title, content: content },
      { headers: auth(accessToken) },
    );
  } catch (e) {
    return e;
  }
};

export const requestNeighborhoodPost = async (
  postId: number,
  accessToken: string,
) => {
  try {
    return await axios.get(`${BASE_URL}/neighborhood/${postId}`, {
      headers: auth(accessToken),
    });
  } catch (e) {
    return e;
  }
};

export const requestEditNeighborhood = async (
  postId: number,
  { title, content }: neighborPostInput,
  accessToken: string,
) => {
  try {
    return await axios.patch(
      `${BASE_URL}/neighborhood/${postId}`,
      { title: title, content: content },
      { headers: auth(accessToken) },
    );
  } catch (e) {
    return e;
  }
};

export const requestDeleteNeighborhood = async (
  postId: number,
  accessToken: string,
) => {
  try {
    return await axios.delete(`${BASE_URL}/neighborhood/${postId}`, {
      headers: auth(accessToken),
    });
  } catch (e) {
    return e;
  }
};

export const requestPostNeighborhoodComment = async (
  postId: number,
  { comment, isHidden }: neighborPostComment,
  accessToken: string,
) => {
  try {
    return await axios.post(
      `${BASE_URL}/neighborhood/${postId}/comment`,
      { comment: comment, isHidden: false },
      { headers: auth(accessToken) },
    );
  } catch (e) {
    return e;
  }
};

export const requestPatchNeighborhoodComment = async (
  commentId: number,
  comment: string,
  accessToken: string,
) => {
  try {
    return await axios.patch(
      `${BASE_URL}/neighborhood/comment/${commentId}`,
      { comment },
      { headers: auth(accessToken) },
    );
  } catch (e) {
    return e;
  }
};

export const requestDeleteNeighborhoodComment = async (
  commentId: number,
  accessToken: string,
) => {
  try {
    return await axios.delete(`${BASE_URL}/neighborhood/comment/${commentId}`, {
      headers: auth(accessToken),
    });
  } catch (e) {
    return e;
  }
};

export const requestPostNeighborhoodLike = async (
  postId: number,
  accessToken: string,
) => {
  try {
    return await axios.post(`${BASE_URL}/neighborhood/${postId}/like`, null, {
      headers: auth(accessToken),
    });
  } catch (e: any) {
    console.log(e);
    if (e.response?.status === 400) {
      toast('본인의 글에는 좋아요를 누를 수 없습니다.');
    }
    return e;
  }
};
