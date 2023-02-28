import { headerItem } from "components/shared/helpers";
import styled from "styled-components/macro";
import HeaderDarkButtonIcon from "./Icon";
import useStore from "../../../store";

const DarkButton = styled.span`
  ${headerItem};

  padding: 0 8px;
  cursor: pointer;

  @media (hover: hover) {
    :hover path {
      fill: ${(props) => props.theme.accent};
    }
  }
`;

export default function HeaderDarkButton() {

  const toggleTheme = useStore(state => state.toggleTheme);

  return (
    <DarkButton onClick={toggleTheme}>
      <HeaderDarkButtonIcon />
    </DarkButton>
  );
}
