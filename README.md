# Force RS256 (RSA + SHA-256) on FIDO2

FIDO2 is a passwordless authentication solution. It uses the default cryptosystems RS256 and ES256 (ECDSA involving the P256 curve).

However, there are rumors that the p-256 curve might be backdoored. It was suggested by Jerry Solinas who worked for the NSA.

This project aims to enforce only RSA for your FIDO2 authentication so that you will not be affected by the backdoor (in case).

## Using this project

Git clone this project. From your browser go to chrome://extensions, then Load Unpacked and load the extension.

## Disclaimer:

Please don't use this extension if your authenticator does not support RS256.

# Reclaim your data
