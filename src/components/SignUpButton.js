import React, { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button';

function SignUpButton() {
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
      }
  
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]);
  
    const handleClick = () => setLoading(true);
  
    return (
      <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
        style={{
          marginTop: "20px",
          padding: "10px 50px"
        }}
      >
        가입하기
      </Button>
    );
  }

export default SignUpButton