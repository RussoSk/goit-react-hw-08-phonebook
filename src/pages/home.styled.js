import styled from "@emotion/styled";

import { Button, ListItem, Typography } from "@mui/material";


export const ListItemSt = styled(ListItem)`
max-width: 320px;
display: block;
  background-color: grey;
  border-radius: 10px;
`;

export const ListText = styled(Typography)`
color: white;`;


export const ListButton = styled(Button)`
  background-color: white;
  color: #1976d2;

  &:hover {
    color: white;
  }

  &:focus {
    outline: none;
    color: white;
  }
`;

export const Title = styled(Typography)`
font-weight: bold;
`