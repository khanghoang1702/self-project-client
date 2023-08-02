import axios from "axios";

const uploadUrl = 'https://api.imgbb.com/1/upload?expiration=600&key=bb57a5326063fff4441836142ec9e4a3'
export const uploadFile = async (file: any) => {
    try {
        const bodyFormData = new FormData();
        bodyFormData.append('image', file);
        const res = await axios.post(uploadUrl, bodyFormData, {
            headers:{
                "Content-Type": "multipart/form-data"
            }
        })
        return res
    } catch (e) {
        return e
    }
}