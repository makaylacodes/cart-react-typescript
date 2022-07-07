
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

//Can style the button by providing it to the styled componenets

//So it doesn't go to the edges of the screen
export const Wrapper = styled.div`
    margin:40px;
`;

//Provides it with the IconButton component
export const StyledButton = styled(IconButton)`
    position: fixed;
    z-index: 100;
    right: 20px;
    top: 20px;
`;