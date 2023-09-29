import { myAxios } from "./helper"

export const createPost=(postData)=>{
    return myAxios.post(`/user/${postData.userId}/category/${postData.categoryId}/posts`,postData).then(response=>response.data)
}