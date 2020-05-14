import moment from 'moment'
import 'moment/locale/pt-br'

export const formateDateMonthYear = (date, format, separador) => {
    const dateMonthYear = moment(date).locale('pt-br').format("MMMM [de] YYYY")
    return dateMonthYear
}