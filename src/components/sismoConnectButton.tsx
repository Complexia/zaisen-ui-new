import {
    AuthType,
    SismoConnectButton,
    SismoConnectClientConfig,
    SismoConnectResponse,
  } from "@sismo-core/sismo-connect-react";
  import axios from "axios";
  import { useState } from "react";
  
  const sismoConnectConfig: SismoConnectClientConfig = {
    appId: "0x112a692a2005259c25f6094161007967",
    devMode: {
      enabled: true,
    },
  };


const SismoConnect = () => {

    const [verifying, setVerifying] = useState(false);
    const [error, setError] = useState("");
    const [isVerified, setIsVerified] = useState(false);
    const verify = async (response: SismoConnectResponse) => {
        console.log(response);
        setVerifying(true);
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
    };

    return (
        <div className="ml-auto py-4">
            {!isVerified ? (
                <>
                    <SismoConnectButton
                        config={sismoConnectConfig}
                        auths={[{ authType: AuthType.VAULT }]}
                        onResponse={(response: SismoConnectResponse) => verify(response)}
                        verifying={verifying}
                        callbackPath={"/"}
                        overrideStyle={{ marginBottom: 10 }}
                    />
                    <>{error}</>
                </>
                ) : (
                "Response verified!"
            )}
        </div>
    )
}

export default SismoConnect;

