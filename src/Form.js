import React, { useState, useEffect } from "react";
import { Input, Select, Form as AntDForm } from "antd";
import { Button } from "./ui/Button";
import { useEmployeeContext } from "./EmployeeContext";
import styled from "./ui/styledComponents/styled-components";
import { Card } from "./ui/Card";
import { useChangeDocTitle } from "./hook/useChangeDocTitle";

// const StyledInput = styled(Input).attrs({ type: "password" })``;
const StyledInput = styled(Input)`
  &:hover {
    border: solid 1px red;
  }
`;

const StyledButton = styled(Button)`
  background-color: red;
`;

const countriesObj = {
  US: ["AZ", "NY", "Los Angeles"],
  Canada: ["Ontario", "British Columbia", "Alberta"],
};

const countries = ["US", "Canada"];

function Form() {
  const [country, setCountry] = useState();
  const { createEmmployee } = useEmployeeContext();
  const [form] = AntDForm.useForm();

  const { setdocumentTitle } = useChangeDocTitle();

  useEffect(() => {
    setdocumentTitle("Add new Employee");
  }, [setdocumentTitle]);

  const onClick = (value) => {
    setCountry(value);
  };
  const onFormSubmit = (formValues) => {
    createEmmployee(formValues);
    form.resetFields();
  };
  return (
    <Card>
      <h1>Add an employee</h1>
      <h6>First name</h6>
      <AntDForm form={form} onFinish={onFormSubmit}>
        <AntDForm.Item
          name="firstName"
          rules={[{ required: true, message: "Please input this value" }]}
        >
          {/* <Input /> */}
          <StyledInput />
        </AntDForm.Item>
        <h6>Last name</h6>
        <AntDForm.Item
          name="lastName"
          rules={[{ required: true, message: "Please input this value" }]}
        >
          <Input />
        </AntDForm.Item>
        <h6>Empoloyee ID</h6>
        <AntDForm.Item
          name="EmployeeID"
          rules={[{ required: true, message: "Please input this value" }]}
        >
          <Input />
        </AntDForm.Item>
        <h6>Country</h6>
        <AntDForm.Item
          name="country"
          rules={[{ required: true, message: "Please input this value" }]}
        >
          <Select onChange={onClick}>
            {countries.map((value) => {
              return <Select.Option key={value}>{value}</Select.Option>;
            })}
          </Select>
        </AntDForm.Item>
        <h6>State</h6>
        <AntDForm.Item
          name="state"
          rules={[{ required: true, message: "Please input this value" }]}
        >
          <Select>
            {Object.entries(countriesObj).map(([key, value]) => {
              if (key === country) {
                return value.map((region) => (
                  <Select.Option key={region}>{region}</Select.Option>
                ));
              }
              return null;
            })}
          </Select>
        </AntDForm.Item>
        <AntDForm.Item>
          <StyledButton htmlType="submit">Submit</StyledButton>
        </AntDForm.Item>
      </AntDForm>
    </Card>
  );
}

export { Form };
