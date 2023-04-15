import {
  AuthType,
  SismoConnectButton,
  SismoConnectClientConfig,
  SismoConnectResponse,
} from "@sismo-core/sismo-connect-react";
import axios from "axios";
import { useState } from "react";
const sismoConnectConfig: SismoConnectClientConfig = {
  appId: "0x894df154e55ed8ea5ab5a9f3a407e667",
  devMode: {
    enabled: true,
  },
};

export const SismoButton = () => {
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  return (
    <SismoConnectButton
      config={sismoConnectConfig} // the config created above
      // you ask for a proof of Data Vault ownership
      auths={[{ authType: AuthType.VAULT }]}
      onResponse={async (response: SismoConnectResponse) => {
        try {
          await axios.post(`/api/zk-response`, {
            response,
          });
          setIsVerified(true);
        } catch (e) {
          setError("Invalid response");
          console.error(e);
        } finally {
          setVerifying(false);
        }
      }}
    />
  );
};
