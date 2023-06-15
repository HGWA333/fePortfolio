import axios from "axios";

const request = axios.create({
  header: {
    "content-type": "application/json",
  },
});

export const userJoin = async () => {
  try {
    const result = (await request.post("/api/register/join")).data;
    return result;
  } catch (err) {
    console.error(err);
  }
};
export const userLeave = async () => {
  try {
    const result = (await request.post("/api/register/leave")).data;
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const userLogin = async () => {
  try {
    const result = (await request.post("/api/user/login")).data;
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const userLogout = async () => {
  try {
    const result = (await request.post("/api/user/logout")).data;
    return result;
  } catch (err) {
    console.error(error);
  }
};

export const boardAdd = async () => {
  try {
    const result = (await request.post("/api/board/add")).data;
    return result;
  } catch (err) {
    console.error(error);
  }
};

export const boardDelete = async () => {
  try {
    const result = (await request.post("/api/board/delete")).data;
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const boardUdate = async () => {
  try {
    const result = (await request.post("/api/board/update")).data;
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const boardPage = async () => {
  try {
    const result = (await request.post("/api/board/page")).data;
    return result;
  } catch (err) {
    console.error(err);
  }
};
export const poolList = async () => {
  try {
    const result = (await request.post("/api/poolList/list")).data;
    return result;
  } catch (err) {
    console.error(err);
  }
};
