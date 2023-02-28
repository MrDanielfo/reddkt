import styled from "styled-components/macro";
import Author from "../shared/Author";
import dayjs from "dayjs";
import useStore from "../../store";
import DeleteButton from "../shared/DeleteButton";
import { useMutation, useQueryClient } from "react-query";
import { deleteComment } from "../../lib/firebase";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.border};
  padding: 8px;
  font-size: 13px;
`;

const Timestamp = styled.span`
  margin-left: 4px;
  color: ${(props) => props.theme.mutedText};
`;

export default function CommentDetail({id, author, created}) {
  const { postId } = useParams();
  const user = useStore(store => store.user);
  const isAuthor = user?.uid === author.uid;
  const queryClient = useQueryClient();

  const mutation = useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comments', postId]);
      toast.success('Comment deleted');
    }
  });

  function delComment({postId, commentId}) {
    mutation.mutate({postId, commentId})
  }

  return (
    <Wrapper>
      <Author username={author.username} />
      <Timestamp>
        {dayjs(created.toDate()).fromNow()}
      </Timestamp>
      {isAuthor && <DeleteButton onClick={() => delComment({postId, commentId: id})} />}
    </Wrapper>
  );
}
