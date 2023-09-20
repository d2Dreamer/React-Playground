import {
    Dialect,
    DialectCloudEnvironment,
    DialectSdk,
} from '@dialectlabs/sdk';
import {
    Aptos,
    AptosSdkFactory,
    NodeDialectAptosWalletAdapter
} from '@dialectlabs/blockchain-sdk-aptos';
  
const environment: DialectCloudEnvironment = 'development';
  
const sdk: DialectSdk<Aptos> = Dialect.sdk(
    {
      environment,
    },
    AptosSdkFactory.create({
      // IMPORTANT: must set environment variable DIALECT_SDK_CREDENTIALS
      // to your dapp's Aptos messaging wallet keypair
      wallet: NodeDialectAptosWalletAdapter.create(),
    }),
);