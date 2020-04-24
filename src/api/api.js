import axios from "axios";

let base = "";

export const requestLogin = params => {
  return axios.post(`http://www.baidu.com`, params).then(res => res.data);
};

export const getUserList = params => {
  return axios.get(`${base}/user/list`, { params: params });
};

export const getUserListPage = params => {
  return axios.get(`${base}/user/listpage`, { params: params });
};

export const removeUser = params => {
  return axios.get(`${base}/user/remove`, { params: params });
};

export const batchRemoveUser = params => {
  return axios.get(`${base}/user/batchremove`, { params: params });
};

export const editUser = params => {
  return axios.get(`${base}/user/edit`, { params: params });
};

export const addUser = params => {
  return axios.get(`${base}/user/add`, { params: params });
};

// export const houseTotal = () => {return instance.get(`http://localhost:8089/houseTotal`).then(res=>res.data)}; //return Promise对象
// 1： then里面的匿名函数不能有{},
//2：这里面可以不用then 因为返回的本身就是promis对象

export const houseTotal = () => {
  return axios({
    method: "get",
    url: "http://localhost:8089/api/house/houseTotal"
  }).then(res => res.data);
}; //return Promise对象

/*该接口调db*/
export const houseDetailsDb = params => {
  return axios({
    method: "post",
    url: "http://localhost:8089/api/house/houseDatail/db",
    data: {
      keyword: params
    }
  }).then(res => res.data);
};

/*该接口查es*/
export const houseDetailsEs = params => {
  return axios({
    method: "post",
    url: "http://localhost:8089/api/house/houseDatail/es",
    data: params
  }).then(res => res.data);
};
