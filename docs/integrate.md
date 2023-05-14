---
sidebar_position: 3
---

# Integration for Developers

Before you begin, read the [Bitcoin Cash Metadata Registry (BCMR) Specification](https://cashtokens.org/docs/bcmr/chip/). You can also join [CashToken Devs on Telegram](https://t.me/cashtoken_devs) to ask questions and chat with other developers.

### Add an Embedded Registry

Start by creating an [Embedded Registry](https://cashtokens.org/docs/bcmr/chip/#embedded-registries) in your application. You can simply pull [the BMCR](/.well-known/bitcoin-cash-metadata-registry.json) (hosted at the [standard URI](https://cashtokens.org/docs/bcmr/chip/#well-known-uri) on `otr.cash`) from OpenTokenRegistry (OTR) into your codebase on a regular interval, or you may choose to copy OTR's data into a larger registry that you independently maintain.

### Use the Embedded Registry

Using the embedded registry, render token names, icons, symbols, and URIs in your user interfaces. Review the [JSON Schema overview](https://cashtokens.org/docs/bcmr/chip/#metadata-registry-json-schema), [Guidelines for Client Software](https://cashtokens.org/docs/bcmr/chip/#guidelines-for-client-software), and [fully-documented types](https://github.com/bitjson/chip-bcmr/blob/master/bcmr-v2.schema.ts) for usage information.

### Add Runtime Updating

To increase the velocity at which end users can receive registry updates, consider adding support for updating the embedded registry at runtime [via DNS](https://cashtokens.org/docs/bcmr/chip/#dns-resolved-registries) and/or via [on-chain transactions](https://cashtokens.org/docs/bcmr/chip/#chain-resolved-registries).

## Advanced Integrations

Some applications may choose to enable greater user control over BCMR usage, and more advanced applications may add registry editing and export features.

### Enable Registry Import

Some applications provide advanced users with the ability to manually import registries (e.g. from a file or from an arbitrary URL).

Note that malicious registries can mislead users into mislabeling token, identities, and contract applications, leading to loss of value; implementers supporting manually-imported registries should review [Adding and Updating Registries](https://cashtokens.org/docs/bcmr/chip/#adding-and-updating-registries).

### Enable Registry Edit & Export

Some applications allow advanced users to edit an internal, user-managed registry to add new entries or overwrite entries in the application's embedded registry. The user-managed registry may be made exportable as a JSON file, simplifying publishing or contributing to public registries like OpenTokenRegistry.

Note that registry edit or overwrite abilities pose similar risk for misleading unsuspecting users as those posed by manually-imported registries.
