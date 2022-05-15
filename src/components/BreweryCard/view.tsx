import React from "react";
import { IBreweryCardView } from "./interfaces";
import { CardWrraper } from "./style";
import { designSystem } from "../../designSystem";
import styled from "styled-components";

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
} = designSystem;

export const BreweryCardView: React.FC<IBreweryCardView> = ({ brewery }) => {
  return (
    <CardWrraper>
      <Card>
        <CardHeader action={<DeleteIcon />} title={brewery.name} />
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
          </Stack>
          <br />
          <Stack direction="row" spacing={4}>
            <Chip
              icon={<LocalPhoneIcon />}
              label={brewery.phone}
              color="primary"
            />
            <Chip icon={<AddCircleIcon />} label="Add more" color="primary" />
          </Stack>
        </CardContent>
      </Card>
    </CardWrraper>
  );
};
