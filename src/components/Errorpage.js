import React from 'react';
import { Button, Result } from 'antd';
const Error = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button onClick={()=>{
        window.location.href = "/";

    }} type="primary">Reload Load Page</Button>}
  />
);
export default Error;