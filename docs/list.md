---
sidebar_position: 2
---

# List a Token

New tokens may be listed by submitting a pull request directly to [the registry in the project repository](https://github.com/OpenTokenRegistry/otr.cash/blob/master/static/.well-known/bitcoin-cash-metadata-registry.json). Please ensure your changes conform to the [Bitcoin Cash Metadata Registry (BCMR) JSON Schema](https://cashtokens.org/docs/bcmr/chip/#metadata-registry-json-schema) and that all tokens meet the criteria for inclusion below.

## Inclusion Criteria

OpenTokenRegistry requires submissions to meet minimum standards for inclusion:

- **Complete, accurate, neutral information** – All required and recommended properties have been included (`name`, `description`, `token` fields, and at least `icon` and `web` URIs), any relevant historical information is accurately portrayed by previous snapshots, and all claims are verifiably accurate and neutral in tone. If relevant, please publicly submit any additional information that may help reviewers to corroborate statements of fact.
- **Globally unique `symbol`** – Chosen symbols should be either widely accepted within the Bitcoin Cash ecosystem or demonstrate a good-faith effort to avoid misleading conflicts, both within OpenTokenRegistry and with assets not issued on Bitcoin Cash.
- **A token `icon`** – All submissions must reference a square, static icon to represent the token. Transparency is supported, and icons should be suitable for display against both light and dark backgrounds. Acceptable formats are `SVG`, `AVIF`, `WebP`, or `PNG`; `SVG` is recommended. For raster formats, the size must be `400px` by `400px`.
- **IPFS URIs for static data** – The `icon` and [other URIs for static data](https://github.com/bitjson/chip-bcmr#authentication-of-static-data) must use IPFS to enable caching and deduplication across registries, more resilient resource resolution, and data integrity guarantees. Consider using a pinning service like [nft.storage](https://nft.storage/).
- **An active web presence** – At a minimum, all entries must have an active `web` URI offering information about the token; generally, this should be a dedicated project website at a unique domain name owned by the project or issuing organization. The `web` URI may use IPFS (or other content-addressing protocols), but such entries must still demonstrate ongoing activity by other means, e.g. an active `forum`, `chat`, `support`, or other [optional URI identifiers](https://cashtokens.org/docs/bcmr/chip/#optional-uri-identifiers). Entries with consistently non-responsive `web` URIs may be moved to an archival registry or removed from OpenTokenRegistry.
- **Safe for work** – it must be unequivocally safe to embed OpenTokenRegistry in applications published via a variety of curated directories. For this reason, OpenTokenRegistry does not include content that is objectionable or inappropriate for professional working environments. In particular, review [Apple's App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) and [Google Play's Content Standards](https://support.google.com/googleplay/android-developer/answer/9878810). Please note, OpenTokenRegistry is a permissively licensed, volunteer-maintained, open source project; we welcome others to fork and maintain registries with alternative listing standards.

## Refining Submissions

Please consider these additional recommendations when refining your submission.

### Name

A great `name` briefly describes the listed asset as referred to in aggregate, e.g. `ACME Gold`, `ACME Class A Shares`, `ACME Loyalty Cards`, `ACME Points`, `ACME Art Collection`, `ACME Rewards Club`, etc.

Names should generally be no longer than 20 characters; exceptions may be allowed for existing legal names – please provide evidence in your submission indicating the jurisdiction(s) in which the legal name is established.

### Description

A great `description` is asset-first, explaining what it means to a user if this asset unexpectedly ends up in their wallet.

Descriptions must be objective, authoritative, and neutral in tone, and they must not include exclamations, calls to action, or disputable statements. Descriptions are intended for use by unaffiliated, neutral, third parties (wallets, block explorers, exchanges, etc.) in user interfaces without any disclaimers – it must never be necessary for user interfaces to indicate that an OpenTokenRegistry description is written by an external party, contains user-generated content, or otherwise requires end-user scrutiny.

The first sentence in the `description` should be a complete summary, and any following sentences within the first paragraph should simply expand on the initial sentence. Any number of following paragraphs may continue to provide further information, with the most important information appearing first. Please review other descriptions in the registry for examples.

Note that in user interfaces with limited space, descriptions will be hidden (until revealed by the user) beyond the first newline character or `140` characters.

Please format the `description` in your submission using these guidelines:

- Separate paragraphs with `\n\n`.
- Lists are supported:
  - Use `\n\n` before the first list item and following the last item.
  - Separate subsequent list items with `\n`.
  - Begin list item lines with a single space following the previous new line character.
  - Use hyphens (`-`) for unordered lists.
    - E.g.: `\n\n - ...\n - ...\n - ...\n\n`.
  - Use number-period formatting for ordered lists.
    - E.g.: `\n\n 1. ...\n 2. ...\n 3. ...\n\n`.
- No other markdown or text formatting is supported. (No links, bolding, italics, etc.)
- Avoid including an additional space at the beginning of new lines:
  - Correct: `...end paragraph.\n\nNext paragraph`
  - Incorrect: `...end paragraph.\n\n Next paragraph`

### Symbol

**All asset symbols included in OpenTokenRegistry must be globally unique**, including among assets not listed in OpenTokenRegistry. For new assets, we recommend reviewing the [BCMR Symbol Length Recommendations](https://cashtokens.org/docs/bcmr/chip#symbol-length-recommendations).

OpenTokenRegistry has no control over symbol "assignments" in the wider marketplace; we do not have the power to unilaterally grant contested symbols to any particular party. Neutral wallets, exchanges, block explorers, and other service providers rely on OpenTokenRegistry to safeguard the symbols and data they render to users, so adding new listings which conflict with existing asset symbols in the wider marketplace might prevent others from relying on OpenTokenRegistry's data.

In cases of long-standing disputes over a particular symbol (e.g. the same symbol has been used to refer to different assets by good-faith actors across multiple international markets), OpenTokenRegistry may be forced to prefix one or both symbols for clarity, e.g. `NYSE-DTE`, `XETRA-DTE`.

If selecting a non-contentious symbol is impossible, please provide multiple examples of well-known, neutral institutions which recognize this asset using the contentious symbol (e.g. exchanges, brokers, custodians, data providers, etc.) and indicate a preferred prefix for the listing in OpenTokenRegistry (e.g. `NYSE-`, `NASDAQ-`, `XETRA-`, `PAR-`, etc.).

## Review Process

Following submission of a complete [pull request on the project repository](https://github.com/OpenTokenRegistry/otr.cash/pulls), volunteer contributors and maintainers will review the pull request for conformance with the [Inclusion Criteria](#inclusion-criteria).

All discussion regarding the submission should take place in the public pull request.

When a particular pull request has been approved by at least two members of the OpenTokenRegistry GitHub organization, the pull request may be merged by a maintainer. In the case of disputes, pull requests should remain unmerged until the the pull request has been revised to resolve concerns of all OpenTokenRegistry organization members (and where reasonable, all other participants in the review).

New contributors and maintainers are welcome! Consistent contributors and reviewers will be added as members to the OpenTokenRegistry GitHub organization.

## Process Improvements

OpenTokenRegistry is a relatively new project and community – our review process and inclusion criteria may change over time. Contributions that improve on this review process, documentation, or automated tooling are welcome and encouraged.
