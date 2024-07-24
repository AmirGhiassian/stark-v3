import Form from "react-bootstrap/Form";
import { FloatingLabel } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import "./SetupStyles.css";
import { useState, useEffect } from "react";

function Setup() {
  const [defaultPort, setDefaultPort] = useState("1028");
  const [defaultPortSwitch, setDefaultPortSwitch] = useState(true);

  useEffect(() => {
    if (!defaultPortSwitch) {
      setDefaultPort("1028");
    }
  }, [defaultPortSwitch]);

  const togglePort = () => {
    setDefaultPortSwitch((prev) => !prev);
  };

  return (
    <div className="container">
      <div className="setup-form">
        <InputGroup>
          <FloatingLabel controlId="ip" label="hand ip" className="mb-3">
            <Form.Control placeholder="IP Address of device" />
          </FloatingLabel>
          <InputGroup.Text>:</InputGroup.Text>
          <FloatingLabel controlId="port" label="port" className="mb-3">
            <Form.Control
              placeholder="Port of device"
              defaultValue={defaultPort}
              disabled={defaultPortSwitch}
            />
          </FloatingLabel>
        </InputGroup>
        <Form.Check
          type="switch"
          label="Use Default Port"
          checked={defaultPortSwitch}
          onChange={togglePort}
        />
      </div>
    </div>
  );
}

export default Setup;
