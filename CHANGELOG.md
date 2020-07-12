**cosmic-vote /**
[Readme](https://cosmic.vote)
• [Changelog](https://cosmic.vote/CHANGELOG)

# Changelog

All notable changes to this project will be documented in this file.

This project adheres to **[Semantic
Versioning](https://semver.org/spec/v2.0.0.html)**. Version syntax is
`{major}.{minor}.{patch}`, where a field bump means:

- **Patch**: The release contains bug fixes.
- **Minor**: The release contains backward-compatible changes.
- **Major**: The release contains compatibility-breaking changes.

**Remember:** Both micro and minor releases are guaranteed to respect
backward-compatibility and can be updated to without risk of breakage. For major
releases, please check this changelog before upgrading.

## 1.0.0-beta.6 - 2020-07-12

### Added

- Meta: Provide embeddable micro-frontends. Any Cosmic.vote view can now be
  embedded into third-party websites by using an iframe pointing to its address.
  When embedded, Cosmic.vote only displays the desired tab content, not the full
  interface. ([Example](https://codepen.io/cosmic-plus/full/NWxMEvW))
- UI: Add public network support (All).

### Changed

- Meta: Ensure URL<->content consistency (All).
- UI: Make "Listing" setting a yes/no question (New Poll). − Thanks [@OrbitLens]
- UI: Improve hints (New Poll). − Thanks [@OrbitLens]
- UI: Rename the "Indifferent" grade into "Undecided". (All)

### Fixed

- Logic: Fix votes streaming on contract switching (Results).
- Logic: Create account using the minimum required balance (New Poll).
- UI: Fix polls list auto-update (Browse).
- UI: Fix table scrolling on mobile (Browse).
- UI: Fix inconsistent consensus confirmation (Vote).

## 1.0.0-beta.5 - 2020-07-08

### Changed

- Logic: Temporarily disable polls list auto-update. Running multiple streams
  leads to poor network performance.

## 1.0.0-beta.4 - 2020-07-08

### Added

- Meta: Setup favicons & social preview.
- UI: Add explanations for 'New' & 'Browse' tabs.

### Changed

- UI: Switch to Cosmic.link v2. It is now possible to select 'Test Account'
  directly in the Cosmic.link signing methods list.

### Fixed

- UI: Fix a couple of sentences.

## 1.0.0-beta.3 - 2020-07-05

### Added

- UI: Add custom new poll listing address.
- UI: Add browse tab.

### Changed

- Style: Polish header style.

### Fixed

- Style: Normalize iOs/macOs form elements.
- UI: Fix typos.
- UI: Fix new poll confirmation cancelling.

## 1.0.0-beta.2 - 2020-06-27

### Added

- UI: Tell when the contract is being loaded.
- UI: Keep results in sync with the ledger.
- UI: Redirect to results once vote has been validated.
- UI: Display contract time-related parameters.

### Fixed

- Meta: Ensure stellar.toml is served.
- Style: Fix unwanted "bumping" effect on buttons.
- Style: Fix mobile tab selector arrow & width.
- Style: Fix buttons vertical align.
- Style: Fix mobile display of results.
- UI: Fix syncing after posting a new poll.

## 1.0.0-beta.1 - 2020-06-21

Initial release.
