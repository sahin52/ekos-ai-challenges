import axios, { AxiosResponse } from "axios";
import { CardDto } from "./types";

export async function isValidCard(cardDetailsToCheck: CardDto) {
  let cardDetailsAxios: AxiosResponse<CardDto[]> = await axios.get(
    "https://mocki.io/v1/a5ae8585-b42d-486b-a4ff-25ebfebbaddf"
  );
  let cardDetailsResponse = cardDetailsAxios.data;
  for (let i = 0; i < cardDetailsResponse.length; i++) {
    let cardDetailResponse = cardDetailsResponse[i];
    if (
      cardDetailResponse.ccv === cardDetailsToCheck.ccv &&
      cardDetailResponse.exp === cardDetailsToCheck.exp &&
      cardDetailResponse.number === cardDetailsToCheck.number
    ) {
        return true;
    }
  }
  return false;
}
