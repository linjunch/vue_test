import Axios from "Axios";

export async function getList() {
  return Axios({
    method: "Get",
    url: `/api/getprodlist`
  });
}

export async function addItem(name) {
  return Axios({
    method: "Post",
    url: `/api/addproduct`,
    data: { name }
  });
}
export async function deleteItem(id) {
  return Axios({
    method: "Get",
    url: `/api/delproduct/${id}`
  });
}
