import { createAction } from "@reduxjs/toolkit";
import { CardProps } from "types/card";

export const getCardData = createAction("/dashboard/fetchRequest");
export const getCardDataSuccess = createAction<{ cardData: CardProps[] }>(
  "/dashboard/fetchSuccess"
);
export const getCardDataFailure = createAction<string>(
  "/dashboard/fetchFailure"
);
