import { link } from "components/shared/helpers";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import dayjs from "dayjs";
import Author from "../../shared/Author";
import { useQuery } from "react-query";
import { getCommentCount } from "../../../lib/firebase";

const Wrapper = styled.div`
  font-size: 13px;
  margin-top: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  & > * {
    margin-right: 4px;
  }

  & > a {
    ${link};
  }

  & > span {
    color: ${(props) => props.theme.mutedText};
  }
`;

export default function PostContentDetail({ post }) {

  const { category, id, author, created } = post;
  const { data: commentCount } = useQuery(['commentCount', id], () => getCommentCount(id));

  return (
    <Wrapper>
      <Link to={`/a/${category}/${id}`}>
        {commentCount} comment {commentCount !== 1 ? "s" : ""}
      </Link>
      <Link to={`/a/${category}/${id}`}>
        /a/{category}
      </Link>
      <span>by</span>
      <Author username={author.username}  />
      <span>{dayjs(created.toDate()).fromNow()}</span>
    </Wrapper>
  );
}
