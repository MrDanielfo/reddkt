import { Route } from "react-router-dom";
import styled from "styled-components/macro";
import CategoryMenu from "../components/CategoryMenu";
import Sidebar from "../components/Sidebar";
import PostList from "./PostList";
import PostDetail from "./PostDetail";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 10vw;

  @media (max-width: 1024px) {
    margin: 0 5vw;
  }

  @media (max-width: 768px) {
    display: block;
    margin: 0;
  }
`;

const HomeMainSection = styled.main`
  flex: 1;
  min-width: 0;
`;

export default function Home() {
  return (
    <Wrapper>
      <HomeMainSection>
        <Route component={CategoryMenu} />
        <Route exact path="/" component={PostList} />
        <Route exact path="/a/:category" component={PostList} />
        <Route exact path="/u/:username" component={PostList} />
        <Route exact path="/a/:category/:postId" component={PostDetail} />
      </HomeMainSection>
      <Route component={Sidebar} />
    </Wrapper>
  );
}
