import * as dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
export const handleTime =  (date: string, format?: string) => {
    let customFormat = ''
    dayjs.extend(relativeTime)
    if (format) {
        return dayjs(date).format(format)
    }

    if (dayjs(date).toNow(true).includes('hours')) {
        customFormat = 'H'
        const formatted = dayjs(date).format(customFormat);
        return 'about ' + formatted + ' hours ago'
    } else {
        customFormat = 'ddd, hh:mm A'
        const formatted = dayjs(date).format(customFormat);
        return formatted
    }
}