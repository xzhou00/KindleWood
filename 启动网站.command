#!/bin/zsh
cd -- "${0:A:h}"
print 'KindleWood: http://127.0.0.1:4173/#home'
print 'Keep this window open while using the local website.'
if /usr/sbin/lsof -nP -iTCP:4173 -sTCP:LISTEN >/dev/null 2>&1; then
  print 'The local preview is already running. Open the address above.'
  read -r '?Press Return to close this window. '
else
  python3 -m http.server 4173 --bind 127.0.0.1
fi
