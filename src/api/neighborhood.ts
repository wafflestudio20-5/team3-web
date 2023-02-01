import axios from 'axios';
import { axiosI } from '.';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '.';
import { BASE_URL } from '../constant';
import { neighborPostComment, neighborPostInput } from '../types/neighborhood';
import { redirectWithMsg } from '../utils/errors';

export const requestNeighborhood = async (
  accessToken: string,
  page: number,
  keyword: string,
) => {
  try {
    if (keyword === '') {
      return await axiosI.get(`/neighborhood/?page=${page}`, {
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
  await axiosI
    .post(
      `/neighborhood`,
      { title: title, content: content },
      { headers: auth(accessToken) },
    )
    .then(res => {
      return res;
    })
    .catch(err => {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 400) {
          toast.error(err.response?.data[0]['error']);
        }
        // console.log(err);
      }
    });
};

export const requestNeighborhoodPost = async (
  postId: number,
  accessToken: string,
) => {
  try {
    return await axiosI.get(`/neighborhood/${postId}`, {
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
    return await axiosI.patch(
      `/neighborhood/${postId}`,
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
    return await axiosI.delete(`/neighborhood/${postId}`, {
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
    return await axiosI.post(
      `/neighborhood/${postId}/comment`,
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
    return await axiosI.patch(
      `/neighborhood/comment/${commentId}`,
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
    return await axiosI.delete(`/neighborhood/comment/${commentId}`, {
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
    return await axiosI.post(`/neighborhood/${postId}/like`, null, {
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

export const requestMyNeighborhood = async (
  accessToken: string,
  page: number,
  keyword: string,
) => {
  try {
    if (keyword === '') {
      return await axiosI.get(
        `/users/neighborhood-post/?page=${page}`,
        {
          headers: auth(accessToken),
        },
      );
    } else {
      return await axiosI.get(
        `/users/neighborhood-post/?page=${page}&keyword=${keyword}`,
        {
          headers: auth(accessToken),
        },
      );
    }
  } catch (e) {
    return e;
  }
};

export const requestMyLikeNeighborhood = async (
  accessToken: string,
  page: number,
  keyword: string,
) => {
  try {
    if (keyword === '') {
      return await axiosI.get(
        `/users/like-neighborhood/?page=${page}`,
        {
          headers: auth(accessToken),
        },
      );
    } else {
      return await axiosI.get(
        `/users/like-neighborhood/?page=${page}&keyword=${keyword}`,
        {
          headers: auth(accessToken),
        },
      );
    }
  } catch (e) {
    return e;
  }
};
