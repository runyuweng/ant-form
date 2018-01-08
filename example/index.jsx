import React, { Component } from 'react'
import { render } from 'react-dom'
import { Input } from 'antd'

import Form from 'ant-form'

class ExamplePage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.formConfig = {
      formProps: {
        layout: 'inline',
      },
      buttons: {
        props: {},
        items: [{
          key: 'search',
          props: {
            type: 'primary',
            htmlType: 'submit',
            size: 'default',
          },
          text: '查询',
        }],
      },
      items: [{
        opts: {
          initialValue: '',
        },
        name: 'id',
        props: { label: 'ID' },
        component: <Input />,
      },
      ],
    }
  }

  render() {
    return (
      <div>
        <Form
          formConfig={this.formConfig}
          onSubmit={(err, values) => { console.log(err || values) }}
        />
      </div>
    )
  }
}

render(<ExamplePage />, document.querySelector('#app'))
