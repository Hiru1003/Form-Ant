import React from 'react';
import 'antd/dist/reset.css';
import {
  Form,
  Input,
  Button,
  message,
  Card,
  Typography,
  Space,
  Divider,
  Row,
  Col,
} from 'antd';
import { GoogleOutlined, GithubOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

function App() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form submitted:', values);
    message.success('Form submitted successfully!');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(to right, #f0f2f5, #d9e7ff)',
      }}
    >
      <Card
        bordered={false} // No border
        style={{
          width: 1200, // Increased width of the card
          borderRadius: '16px',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
          background: '#ffffff',
          overflow: 'hidden',
        }}
      >
        <Row>
          {/* Left Column - Image */}
          <Col span={12} style={{ padding: 0 }}>
            <div
              style={{
                height: '100%',
                backgroundImage:
                  'url(https://www.ny-engineers.com/hubfs/glassbuilding.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
                borderRadius: '16px 0 0 16px',
              }}
            ></div>
          </Col>

          {/* Right Column - Form */}
          <Col span={12}>
            <div style={{ padding: '40px' }}>
              <Space direction="vertical" style={{ width: '100%', textAlign: 'center' }}>
                <Title level={2} style={{ marginBottom: '10px' }}>
                  Sign Up
                </Title>
                <Text type="secondary">Create a new account to get started</Text>
              </Space>

              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                requiredMark={false}
                style={{ marginTop: '30px' }}
              >
                <Form.Item
                  name="name"
                  label="Full Name"
                  rules={[{ required: true, message: 'Please enter your name' }]}
                >
                  <Input size="large" placeholder="John Doe" />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Email Address"
                  rules={[
                    { required: true, message: 'Please enter your email' },
                    { type: 'email', message: 'Please enter a valid email' },
                  ]}
                >
                  <Input size="large" placeholder="john@example.com" />
                </Form.Item>

                <Form.Item
                  name="password"
                  label="Password"
                  rules={[{ required: true, message: 'Please enter your password' }]}
                >
                  <Input.Password size="large" placeholder="Create a password" />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    size="large"
                    style={{ backgroundColor: '#000', borderColor: '#000' }}
                  >
                    Create Account
                  </Button>
                </Form.Item>
              </Form>

              {/* <Divider plain>Or</Divider> */}

              <Space direction="vertical" style={{ width: '100%' }}>
                <Button
                  icon={<GoogleOutlined />}
                  block
                  size="large"
                  style={{
                    backgroundColor: '#24292e',
                    color: '#fff',
                    borderColor: '#db4437',
                  }}
                >
                  Sign up with Google
                </Button>

              </Space>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default App;
