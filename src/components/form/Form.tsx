"use client";
import React, { useState, useEffect } from "react";
import { Modal, Form, Input, Upload, Button, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { ProductFormProps } from "@/types";
const ProductForm: React.FC<ProductFormProps> = ({
  open,
  onFinish,
  onFinishFailed,
  handleCancel,
  form,
  fileList,
  handleChange,
  loading,
  types
}) => {
  const [allType, setAllType] = useState<string[]>(types);
  return (
    <Modal
      className="text-center"
      footer={null}
      title="Product Form"
      visible={open}
      onCancel={handleCancel}
    >
      <Form
        className="p-3"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={form}
      >
        {/* Existing Form Items */}
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input product name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please input product price!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input product description!",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Type"
          name="type"
          rules={[{ required: true, message: "Please select product type!" }]}
        >
          <Select placeholder="Select a type">
            {allType.map((type) => (
              <Select.Option key={type} value={type}>
                {type}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Upload picture"
          name="upload"
          rules={[{ required: true, message: "Please upload your file!" }]}
        >
          <Upload
            listType="picture-card"
            fileList={fileList}
            onChange={handleChange}
            beforeUpload={() => false}
            className="bg-gray-300"
          >
            {fileList.length < 1 && (
              <div>
                <PlusOutlined />
              </div>
            )}
          </Upload>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button loading={loading} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default ProductForm;
