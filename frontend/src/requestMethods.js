import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODM2N2Q3ZDYzZjU2NGQwNDI0NTI4YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTczNjUxNiwiZXhwIjoxNjY5OTk1NzE2fQ.7QOXjS1pDIBzr2rp36EdmrlOXwV1_0IP7nm_ssPaINg";

// For fetching data
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

// For users
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
