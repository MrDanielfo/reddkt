import styled from "styled-components/macro";
import CategoryMenuDropdown from "./Dropdown";
import CategoryMenuCreatePostButton from "./CreatePostButton";
import useStore from "../../store";

const Menu = styled.nav`
  display: none;
  border: 1px solid ${(props) => props.theme.border};
  border-left: none;
  border-right: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export default function CategoryMenu() {
  const user = useStore(state => state.user);

  return (
    <Menu>
      <CategoryMenuDropdown />
      {user && <CategoryMenuCreatePostButton />}
    </Menu>
  );
}
