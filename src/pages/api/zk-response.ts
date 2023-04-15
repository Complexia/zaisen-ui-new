import {
  AuthType,
  SismoConnect,
  SismoConnectVerifiedResult,
} from "@sismo-core/sismo-connect-server";

import type { NextApiRequest, NextApiResponse } from "next";
const sismoConnect = SismoConnect({
  appId: "0x0ad03e347304dd6c19d9aa75db8659d9",
});
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { response } = req.body;
  console.log(response);
  try {
    const result: SismoConnectVerifiedResult = await sismoConnect.verify(
      response,
      {
        auths: [{ authType: AuthType.VAULT }],
      }
    );
    console.log("Response verified:", result.response);
    console.log("VaultId: ", result.getUserId(AuthType.VAULT));
    res.status(200).send({});
  } catch (e: any) {
    console.log("response:", response.proofs[0]);
    console.error(e);
    res.status(400).send({});
  }
}
