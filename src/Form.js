import React, { useState } from "react";
import styled from "styled-components";
import { Input, Select, Form as AntDForm, Button } from "antd";
import { useEmployeeContext } from "./EmployeeContext";

const Wrapper = styled.div``;

const countriesObj = {
  US: ["AZ", "NY", "Los Angeles"],
  Canada: ["Ontario", "British Columbia", "Alberta"],
};

const countries = ["US", "Canada"];

function Form() {
  const [country, setCountry] = useState();
  const { createEmmployee } = useEmployeeContext();
  const onClick = (value) => {
    setCountry(value);
  };
  const onFormSubmit = (formValues) => {
    createEmmployee(formValues);
  };
  return (
    <Wrapper>
      <h1>Add an employee</h1>
      <h6>First name</h6>
      <AntDForm onFinish={onFormSubmit}>
        <AntDForm.Item
          name="firstName"
          rules={[{ required: true, message: "Please input this value" }]}
        >
          <Input />
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
              console.log({ key, country });
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
          <Button htmlType="submit">Submit</Button>
        </AntDForm.Item>
      </AntDForm>
    </Wrapper>
  );
}

export { Form };
