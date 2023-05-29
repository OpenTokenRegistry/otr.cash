<!-- For new listings and metadata updates, please fill in the template below. For other pull requests, please delete this template and describe your pull request. -->

# New Listing: `SYMBOL` <!-- or `NAME` for non-token identities -->

<!-- Replace the `PROVIDE...` fields below to add context to this PR: -->

- Identity Name: `PROVIDE_NAME_OF_ASSET`
- Authbase: `PROVIDE_TXID`

## Evidence Linking Authbase to Identity

<!-- First, we need to prove that the on-chain identity defined by the authbase self-identifies as the submitted identity. This prevents an attacker from publicly claiming to control an authbase they do not control. Mark the type of proof you're providing by entering an `x` in the appropriate checkbox: (Change one `[ ]` to `[x]`) -->

- **Select one**:
  - [ ] **Direct evidence**: a [chain-resolved registry](https://cashtokens.org/docs/bcmr/chip#chain-resolved-registries) at the authhead provides substantially equivalent metadata for this authbase. The Authhead TXID is provided below:
  - [ ] **Indirect evidence**: the identity is [burned](https://cashtokens.org/docs/bcmr/chip#burned-identities) or provably locked within a covenant, so the authbase can safely be linked using indirect evidence. Details and two or more corroborating, third party-archived URLs of reputable sources vouching for this association are provided below:

<!-- If "Direct evidence" is checked, provide the Authhead TXID here.

If "Indirect evidence" is checked, provide at least two third-party archived URLs (archive.org, archive.is, etc.) of reputable sources vouching for this association. If the archiving service does not include the original URL in the archived URLs (i.e. it also shortens URLs), please also provide the original URL. -->

## Evidence Linking Identity to Authbase

<!-- Next, we need to prove that the real-world entity self-identifies as the on-chain identity defined by the authbase. This protects known entities from being associated with an attacker-controlled on-chain identity. -->

Archived URL(s):

<!-- Provide a third-party archived URL to a statement by the represented identity claiming the submitted authbase as the root of their on-chain identity. Multiple source are encouraged (e.g. a website, social media profiles, etc.) -->

## Evidence Linking Authbase to Categories

<!-- If they differ, we need to prove that all submitted token categories are/were issued or controlled by the authbase.

As with linking the authbase to this identity, we'll need to demonstrate that each claimed category self-identifies as associated with the authbase via either direct or indirect evidence. -->

- **Select one**:
  - [ ] Token `category` is equal to the authbase for all [Identity Snapshots](https://cashtokens.org/docs/bcmr/chip#identity-snapshots).
  - [ ] Evidence is provided for differing `category` values below:

<!-- Provide evidence for each category claimed in the history of the identity other than the authbase. Uncomment and duplicate the below section as needed: -->

<!--

- Differing `category`: `PROVIDE_CATEGORY_ID`
- **Select one**:
  - [ ] **Direct evidence** – category's authhead TXID with a corroborating chain-resolved registry:
  - [ ] **Indirect evidence** – the category's identity is [burned](https://cashtokens.org/docs/bcmr/chip#burned-identities) or widely understood to be lost, abandoned, compromised, or destroyed; two or more third-party archived URLs of reputable sources vouching for this association:

[Provide evidence here]

-->

## Substantiation of Other Claims

<!-- Finally, if the submitted `description` makes any claims about the behavior of tokens, please submit any additional information to help reviewers corroborate statements of fact in your `description` or other fields. -->

- **Select one**:
  - [ ] The submission (esp. the `description`) includes no claims requiring substantiation.
  - [ ] The claims in this submission can be corroborated with the following evidence:

<!-- Please provide third-party archived URLs to security reviews, attestations, audits, and other resources that substantiate this submission. For each resource, please provide an summary of the claims that can be verified using the resource. -->

# Checklist

- [ ] I have reviewed the [OpenTokenRegistry inclusion criteria](https://otr.cash/docs/list#inclusion-criteria), and this listing can be included in the registry.
- [ ] The listing completes all required fields:
  - **`name`**
    - [ ] Objective, authoritative, and neutral tone
    - [ ] No longer than 20 characters; exceptions may be allowed for existing legal names (please provide evidence above including the jurisdiction(s) in which the legal name is established).
  - **`description`**
    - [ ] Objective, authoritative, and neutral tone
    - [ ] Descriptions is appropriate for use in user interfaces without a disclaimer by unaffiliated, neutral, third parties (wallets, block explorers, exchanges, etc.); no exclamations, calls to action, or disputable statements.
    - [ ] All claims are substantiated above.
  - **`token` information** (if applicable)
    - [ ] Token `category` is defined.
    - [ ] If fungible tokens exist for the `category`, `decimals` is defined.
    - **`symbol`**
      - [ ] Globally-unique base symbol, including among assets not listed in OpenTokenRegistry.
      - [ ] Valid symbol (regular expression: `/^[A-Z0-9]+[-A-Z0-9]*$/`)
      - [ ] Appropriate minimum length (For new, primarily-fungible base symbols: minimum of 4 characters; non-fungible base symbols: minimum of 6 characters; see [Symbol Length Recommendations](https://cashtokens.org/docs/bcmr/chip/#symbol-length-recommendations))
      - [ ] No longer than 13 characters for base symbols
      - [ ] No longer than 26 characters for full symbols
  - **`uris.icon`**
    - [ ] Uses IPFS (`ipfs://`)
    - [ ] Either `SVG` format OR 400px by 400px `AVIF`, `WebP`, or `PNG`
  - **`uris.web`**
    - [ ] Domain name is owned by the issuing project or organization
    - [ ] Either `HTTPS` protocol OR ongoing activity demonstrated via optional URI identifiers (described in [Substantiation of Other Claims](#substantiation-of-other-claims))
  - [ ] Includes relevant historical information in previous snapshots OR this token has never been rebranded, redenominated, or reissued
  - [ ] All static data (images, animations, videos, binary files, etc.) uses `IPFS` to ensure file integrity (`ipfs://...`).
