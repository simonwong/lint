import { message } from 'antd'

export const dva = {
  config: {
    onError(e: Error) {
      message.error(e.message, 3)
    },
  },
}
