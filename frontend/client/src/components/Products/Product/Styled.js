import { styled } from "@mui/system";
import { Card, Box, Stack, CardHeader, Typography } from "@mui/material";

const CardRoot = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: theme.spacing(2),
  border: "none",
  minHeight: 450,
  maxWidth: 270,
  padding: 10,
}));
const SectionImage = styled(Box)`
  height: 200px;
  width: 100%;
  overflow: hidden;
  & > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const SectionContent = styled(Stack)`
  justify-content: space-between;
  padding-block-start: 20px;
`;
const CardHeading = styled(CardHeader)`
  padding: 0;
`;
const CardHeadingText = styled(Typography)`
  color: #545a63;
  text-transform: uppercase;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: ${({ theme }) => theme.typography.pxToRem(15)};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
`;

const styles = {
  CardRoot,
  SectionImage,
  SectionContent,
  CardHeading,
  CardHeadingText
};

export default styles;
