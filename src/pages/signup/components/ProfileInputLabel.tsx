import { ChangeEvent, ChangeEventHandler, useRef, useState } from 'react';
import { ProfileImg, ProfileInput, ProfileLabel } from '../signup.styled';

interface ProfileInputLabel {
  img: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

export const ProfileInputLabel = ({ img, handleChange }: ProfileInputLabel) => {
  const [imgState, setImgState] = useState(img);

  const handlePreviewChange = (e: ChangeEvent) => {
    const targetFiles = (e.target as HTMLInputElement).files as FileList;
    const targetFile = targetFiles[0];
    const fileUrl = URL.createObjectURL(targetFile);
    setImgState(fileUrl);

    // console.log('current img: ', img);
  };

  //   const saveImgFile = () => {
  //     const file = imgFile;
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onloadend = () => {
  //       setImgFile(reader.result);
  //     };
  //   };

  return (
    <>
      <ProfileImg src={imgState} alt="프로필 이미지" />
      <ProfileLabel>
        프로필 이미지 추가
        <ProfileInput
          type="file"
          accept="image/*"
          name="img"
          onChange={e => {
            handlePreviewChange(e);
            handleChange(e);
          }}
          value={img}
        />
      </ProfileLabel>
    </>
  );
};
