---
sidebar_position: 1
---

# Introduction

OpenTokenRegistry (OTR) is an open source, volunteer-maintained registry of tokens issued on Bitcoin Cash. OTR is used to display human-readable names, icons, ticker symbols, and other token information in some Bitcoin Cash wallets, block explorers, indexers, and other software.

### Free & Transparent

OpenTokenRegistry is free to use in your software ([CC0](https://creativecommons.org/publicdomain/zero/1.0/)), there are no fees to list or update token information, and the listing and verification process is public and transparent.

## Using the Registry

Some wallets, explorers, and other types of software come with built-in support for OpenTokenRegistry. This enables the most secure usage, as developers may enable additional verification to suit their applications. For details, see [Integration for Developers](./integrate).

To use OpenTokenRegistry (OTR) in software without built-in support, import OpenTokenRegistry's [Bitcoin Cash Metadata Registry (BCMR)](https://cashtokens.org/docs/bcmr/chip) into your software via URL: `https://otr.cash`. Compatible software will automatically fetch the [latest version of the registry](/.well-known/bitcoin-cash-metadata-registry.json), and if supported, upgrade to on-chain resolution for future updates.
