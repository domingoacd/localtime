import {
  API_URL,
  ERROR_API_FETCHING_DATA,
  ERROR_API_NO_DATA,
} from "../constants";

const handleApiData = (data) => {
  if (data) {
    return data;
  } else {
    return {
      error: ERROR_API_NO_DATA,
    };
  }
};

const handleApiError = (error) => {
  console.error(error);
  return {
    error: ERROR_API_FETCHING_DATA,
  };
};

export const getQuote = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();

  try {
    return handleApiData(data);
  } catch (error) {
    return handleApiError(error);
  }
};
