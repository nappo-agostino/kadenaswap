# `kadenaswap frontend` Changelog

## (2021-01-07)
- Signing method UI and UX improvements (34, 31)
     - move off default JS alert/prompts
     - better UI for entering password and feedback
     - better modals for using wallet and respective errors

## (2021-01-03)
- slippage NaN error (#26)
- improved token selection UX
- wallet reset button functionality (#43)
     - forget all past wallet info when pressed
- can no longer send multiple transaction on confirm screen (#42)
     - button now disabled if connection is laggy
- precision errors when over 12 decimal places
     - temporary fix before decimal system overhaul
- clean console log (#32))


## (2020-12-30)

- token balance updates
- gas price set to minimum
- token selection bugs
   - faulty search for names
   - no search reset after close
   - show selected token
   - don't allow same token to be chosen for coutnervalue
   - updated swap and pool
- general responsiveness of inputs (swap + pool)
