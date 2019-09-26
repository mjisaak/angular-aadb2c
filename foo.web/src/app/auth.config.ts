import { AuthConfig } from 'angular-oauth2-oidc';

export const DiscoveryDocumentConfig = {
  url : "https://aboutazure.b2clogin.com/aboutazure.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=b2c_1_susi"
}

export const authConfig: AuthConfig = {
  redirectUri: window.location.origin + '/index.html',
  responseType: 'token id_token',
  issuer: 'https://aboutazure.b2clogin.com/b88448e7-64f3-497b-a7aa-73ae0cc6e9ce/v2.0/',
  strictDiscoveryDocumentValidation: false,
  tokenEndpoint: 'https://aboutazure.b2clogin.com/aboutazure.onmicrosoft.com/oauth2/v2.0/token?p=b2c_1_susi',
  loginUrl: 'https://aboutazure.b2clogin.com/aboutazure.onmicrosoft.com/oauth2/v2.0/token?p=b2c_1_susi',
  clientId: '0c295dee-8904-4546-92b7-dc64dd14bf58',
  scope: 'openid profile https://aboutazure.onmicrosoft.com/foo-api/user_impersonation',
  skipIssuerCheck: true,
  clearHashAfterLogin: true,
  oidc: true,
}
 