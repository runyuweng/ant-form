import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'

const FormItem = Form.Item;
// 经过 Form.create 包装的组件将会自带 this.props.form 属性
class AntForm extends Component {
  // 提交表单
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((error, fieldsValue) => {
      this.props.onSubmit(error, fieldsValue)
    });
  }

  createFormItem = (item) => {
    if (item.disabled) {
      // console.log(`${item.name} is disabled`)
      return null
    }
    return (
      <FormItem
        key={item.name} 
        {...item.props}
      >
        {this.props.form.getFieldDecorator(item.name, item.opts)(item.component || <Input />)}
      </FormItem>
    )
  }

  createButton = item => <Button key={item.key} {...item.props}>{item.text}</Button>

  render() {
    const { formConfig } = this.props;
    return (
      <Form
        onSubmit={this.handleSubmit}
        {...formConfig.formProps}
      >
        {
          formConfig.items.map(d => this.createFormItem(d))
        }
        {!formConfig.buttons
          ? (
            <FormItem wrapperCol={{ span: 4, offset: 4 }}>
              <Button type="primary" htmlType="submit" size="default">提交</Button>
            </FormItem>
          ) : (
            <FormItem {...formConfig.buttons.props}>
              {formConfig.buttons.items.map(btn => this.createButton(btn))}
            </FormItem>
          )
        }
      </Form>
    )
  }
}

export default Form.create({
  onFieldsChange(props, fields) {
    props.onFieldsChange && props.onFieldsChange(fields)
  },
})(AntForm)
