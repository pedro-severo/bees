import React from "react";
import { IBreweryCardView } from "./interfaces";
import { CardWrraper } from "./style";
import { designSystem } from "../../designSystem";
import { EditableTags } from "../EditableTags";

const {
  Stack,
  Chip,
  Card,
  CardContent,
  Typography,
  AssessmentIcon,
  FmdGoodIcon,
  LocalPhoneIcon,
  AddCircleIcon,
  DeleteIcon,
  CardHeader,
  IconButton,
} = designSystem;

export const BreweryCardView: React.FC<IBreweryCardView> = ({
  brewery,
  handleDeleteButtonClick,
}) => {
  return (
    <CardWrraper>
      <Card>
        <CardHeader
          action={
            <IconButton onClick={() => handleDeleteButtonClick(brewery.id)}>
              <DeleteIcon />
            </IconButton>
          }
          title={brewery.name}
        />
        <CardContent>
          <Typography variant="body1">
            {brewery.city}
            <br />
            {brewery.state} - {brewery.country}
          </Typography>
          <br />
          <Stack direction="row" spacing={4}>
            <Chip
              icon={<AssessmentIcon />}
              label={brewery.brewery_type}
              color="primary"
            />
            <Chip
              icon={<FmdGoodIcon />}
              label={brewery.postal_code}
              color="primary"
            />
            <Chip
              icon={<LocalPhoneIcon />}
              label={brewery.phone}
              color="primary"
            />
          </Stack>
          <br />
          <EditableTags />
        </CardContent>
      </Card>
    </CardWrraper>
  );
};
