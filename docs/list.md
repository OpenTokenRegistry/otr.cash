---
sidebar_position: 2
---

# List a Token

New tokens may be listed by submitting a pull request directly to [the project repository](https://github.com/OpenTokenRegistry/otr.cash). Please ensure your changes conform to the [Bitcoin Cash Metadata Registry (BCMR) JSON Schema](https://cashtokens.org/docs/bcmr/chip/#metadata-registry-json-schema) and that all tokens meet the criteria for inclusion below.

## Inclusion Criteria

OpenTokenRegistry requires submissions to meet minimum standards for inclusion:

- **Complete, accurate, neutral information** – All required and recommended properties have been included (`name`, `description`, `token` fields, and at least `icon` and `web` URIs), any relevant historical information is accurately portrayed by previous snapshots, and all claims are verifiably accurate and neutral in tone. If relevant, please publicly submit any additional information that may help reviewers to corroborate statements of fact.
- **IPFS URIs for static data** – The `icon` and [other URIs for static data](https://github.com/bitjson/chip-bcmr#authentication-of-static-data) must use IPFS to enable caching and deduplication across registries, more resilient resource resolution, and data integrity guarantees. Consider using a pinning service like [nft.storage](https://nft.storage/).
- **Globally unique `symbol`** – Chosen symbols should be either widely accepted within the Bitcoin Cash ecosystem or demonstrate a good-faith effort to avoid misleading conflicts, both within OpenTokenRegistry and with assets not issued on Bitcoin Cash.
- **An active web presence** – At a minimum, all entries must have an active `web` URI offering information about the token. Entries with consistently non-responsive `web` URIs may be moved to an archival registry or removed from OpenTokenRegistry. Note, `web` URIs may use IPFS gateways (or similar bridging solutions for content-addressed content), but such entries must still demonstrate liveness by other means, e.g. an active `forum`, `chat`, `support`, or other [optional URI identifiers](https://cashtokens.org/docs/bcmr/chip/#optional-uri-identifiers).

## Review Process

Following submission of a complete [pull request on the project repository](https://github.com/OpenTokenRegistry/otr.cash/pulls), volunteer contributors and maintainers will review the pull request for conformance with the [Inclusion Criteria](#inclusion-criteria).

All discussion regarding the submission should take place in the public pull request.

When a particular pull request has been approved by at least two members of the OpenTokenRegistry GitHub organization, the pull request may be merged by a maintainer. In the case of disputes, pull requests should remain unmerged until the the pull request has been revised to resolve concerns of all OpenTokenRegistry organization members (and where reasonable, all other participants in the review).

New contributors and maintainers are welcome! Consistent contributors and reviewers will be added as members to the OpenTokenRegistry GitHub organization.

## Process Improvements

OpenTokenRegistry is a relatively new project and community – our review process and inclusion criteria may change over time. Contributions that improve on this review process, documentation, or automated tooling are welcome and encouraged.
