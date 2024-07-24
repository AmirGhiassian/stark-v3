import Form from "react-bootstrap/Form";
import { FloatingLabel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import "./SetupStyles.css";
import { useState, useEffect } from "react";

function Setup() {
  const [handData, setHandData] = useState({
    ip: "",
    port: 1028,
  });
  const [defaultPortSwitch, setDefaultPortSwitch] = useState(true);

  const updatePort = (num: number) => {
    setHandData({
      ...handData,
      port: num,
    });
  };

  const updateIp = (num: string) => {
    setHandData({
      ...handData,
      ip: num,
    });
  };

  useEffect((): void => {
    if (defaultPortSwitch) {
      updatePort(1028);
    }
  }, [defaultPortSwitch]);

  const togglePort = (): void => {
    setDefaultPortSwitch(!defaultPortSwitch);
  };
  const handlePortChange = (event: any): void => {
    updatePort(event.target.value);
  };

  const handleIpChange = (event: any): void => {
    updateIp(event.target.value);
  };

  const connectToHand = (event: any): void => {};

  return (
    <div className="container">
      <div className="setup-form">
        <Form onSubmit={connectToHand}>
          <InputGroup>
            <FloatingLabel controlId="ip" label="hand ip" className="mb-3">
              <Form.Control
                value={handData.ip}
                placeholder="IP Address of device"
                onChange={handleIpChange}
              />
            </FloatingLabel>
            <InputGroup.Text className="mb-3">:</InputGroup.Text>
            <FloatingLabel controlId="port" label="port" className="mb-3">
              <Form.Control
                placeholder="Port of device"
                value={handData.port}
                type="number"
                disabled={defaultPortSwitch}
                onChange={handlePortChange}
              />
            </FloatingLabel>
          </InputGroup>
          <Form.Check
            type="switch"
            label="Use Default Port"
            checked={defaultPortSwitch}
            onChange={togglePort}
          />
          <Button variant="primary" size="lg" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Setup;
