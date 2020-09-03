import React from 'react'
import { Form, Input } from 'antd'
import CustomInput from '@/components/CustomInput'
import styles from './index.less'

const About = ({ form }) => {
  const { getFieldDecorator } = form
  return (
    <div>
      <h1 className={styles.title}>about</h1>

      <Form>
        <Form.Item label="Username" name="username">
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(<Input placeholder="Username" />)}
        </Form.Item>
        <Form.Item label="自定义" name="custom">
          {getFieldDecorator('custom', {
            rules: [],
          })(<CustomInput />)}
        </Form.Item>
      </Form>
    </div>
  )
}

export default Form.create()(About)
