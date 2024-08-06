import React, { useState, useEffect, DragEvent } from "react";
import { Modal, Form, Input, Button, Select, Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { ProductFormProps } from "@/types";

const ProductForm: React.FC<ProductFormProps> = ({
  checkTypeForm,
  open,
  onFinish,
  onFinishFailed,
  handleCancel,
  form,
  fileList,
  handleChange,
  loading,
  types,
  imageUrl = "",
}) => {
  const [allType, setAllType] = useState<string[]>(types);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState<boolean>(false);

  useEffect(() => {
    if (imageUrl) {
      // Reset selectedFile when imageUrl changes
      setSelectedFile(null);
    }
  }, [imageUrl]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setSelectedFile(file);
      handleChange(file); // Pass the file to handleChange if needed
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    const file = e.dataTransfer.files ? e.dataTransfer.files[0] : null;
    if (file) {
      setSelectedFile(file);
      handleChange(file); // Pass the file to handleChange if needed
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const previewImage = selectedFile
    ? URL.createObjectURL(selectedFile)
    : imageUrl;

  useEffect(() => {
    // Revoke object URL when component unmounts or selectedFile changes
    return () => {
      if (selectedFile) {
        URL.revokeObjectURL(previewImage);
      }
    };
  }, [selectedFile, previewImage]);

  return (
    <Modal
      className="full-screen-modal"
      footer={null}
      title={<h2>Create a new product</h2>}
      visible={open}
      onCancel={handleCancel}
      width="80vw"
      style={{
        top: 20,
        height: "90vh",
        padding: 0,
        backgroundColor: "#eaeaea",
        borderRadius: 8,
        overflow: "hidden",
      }}
      bodyStyle={{
        padding: "20px",
        display: "flex",
        alignItems: "center",
        height: "calc(100% - 55px)",
        overflowY: "auto",
      }}
    >
      <Form
        name="productForm"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
        style={{ flex: 1 }}
      >
        <Row gutter={24}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                { required: true, message: "Please input product name!" },
              ]}
            >
              <Input placeholder="Enter product name" />
            </Form.Item>
            <Form.Item
              label="Price"
              name="price"
              rules={[
                { required: true, message: "Please input product price!" },
              ]}
            >
              <Input placeholder="Enter product price" />
            </Form.Item>
            <Form.Item
              label="Type"
              name="type"
              rules={[
                { required: true, message: "Please select product type!" },
              ]}
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
              label="Description"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please input product description!",
                },
              ]}
            >
              <Input.TextArea
                placeholder="Enter product description"
                rows={4}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Upload picture"
              name="upload"
              rules={[{ required: true, message: "Please upload your file!" }]}
            >
              <div
                style={{
                  width: "500px",
                  height: "420px",
                  border: dragging ? "2px solid #1890ff" : "2px dashed #d9d9d9",
                  borderRadius: "4px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  backgroundColor: dragging ? "#f0f0f0" : "white",
                }}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                {checkTypeForm != 0 ? (
                  <img
                    src={previewImage}
                    alt="Preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      color: "#999",
                    }}
                  >
                    <PlusOutlined style={{ fontSize: "64px" }} />
                  </div>
                )}
                <input
                  type="file"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                    cursor: "pointer",
                  }}
                  onChange={handleFileChange}
                />
              </div>
            </Form.Item>
          </Col>
        </Row>
        <Row justify="end">
          <Col>
            <Button loading={loading} type="primary" htmlType="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default ProductForm;
