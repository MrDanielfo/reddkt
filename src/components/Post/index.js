import styled from "styled-components/macro";
import PostVote from "./Vote";
import PostContent from "./Content";

const Wrapper = styled.div`
  display: flex;
  height: auto;
  background-color: ${(props) => props.theme.foreground};
`;

export default function Post({ post, full }) {
  return (
    <Wrapper>
      <PostVote post={post} />
      <PostContent post={post} full={full} />
    </Wrapper>
  );
}
