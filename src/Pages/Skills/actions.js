import api from '../../services/api'

export const read = async () => {
    try {
        const response =  await api.get(`/skills`)
        if(response.status === 200){
            return response.data
        }
    } catch (error) {
        console.log(error)
    }
}