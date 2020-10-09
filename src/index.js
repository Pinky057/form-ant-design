import React from "react";
import ReactDOM from "react-dom";
import { Form, Input, Button, Select, DatePicker, InputNumber } from "antd";

import "antd/dist/antd.css";
import "./index.css";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

const Demo = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Expense Head"
        name="expense Head"
        rules={[
          {
            required: true,
            message: "Please input your username!"
          }
        ]}
      >
        <Select>
          <Option value="demo1">TA</Option>
          <Option value="demo2">DA</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="DatePicker"
        name="datePicker"
        rules={[
          {
            required: true
          }
        ]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        name="bill"
        label="Mode of Bill"
        rules={[
          {
            required: true
          }
        ]}
      >
        <Select placeholder="Select a Mode Of Bill" allowClear>
          <Option value="Meeting">Meeting Bill</Option>
          <Option value="Transport">Transport Bill</Option>
          <Option value="other">Hotel Bill</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) =>
          prevValues.bill !== currentValues.bill
        }
      >
        {({ getFieldValue }) => {
          return getFieldValue("bill") ? (
            <Form.Item
              name="linebill"
              label="Mode of Bill Line"
              rules={[
                {
                  required: true
                }
              ]}
            >
              <Select>
                <Option value="value1">CNG</Option>
                <Option value="value2">MOTOR CYCLE</Option>
                <Option value="value3">Rent</Option>
              </Select>
            </Form.Item>
          ) : null;
        }}
      </Form.Item>

      <Form.Item
        label="Visted Place"
        name="visted place"
        rules={[
          {
            required: true,
            message: "Please input Visited Place!"
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Distance" name="distance">
        <InputNumber />
      </Form.Item>

      <Form.Item
        label="Fare Paid"
        name="fare-paid"
        rules={[
          {
            required: true,
            message: "Please input your Fare Paid!"
          }
        ]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item label="Remarks" name="Remarks">
        <Input />
      </Form.Item>

      <Form.Item label="Purpose" name="Purpose">
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

ReactDOM.render(<Demo />, document.getElementById("container"));
