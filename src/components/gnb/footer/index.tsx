import { Text, Wrapper } from './footer.styled';

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Wrapper>
      <Text>{`Copyright ⓒ ${year}.`}</Text>
      <Text>{}</Text>
    </Wrapper>
  );
};
