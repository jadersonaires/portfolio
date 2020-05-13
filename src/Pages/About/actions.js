import api from '../../services/api'

export const readFrontEnd = async () => {
    try {
        const response = await api.get(`/about/front-end`)
        if (response.status === 200)
            return response.data

    } catch (error) {
        console.log(error.response.data)
    }
}