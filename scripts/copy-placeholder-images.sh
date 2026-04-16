#!/usr/bin/env bash
# ------------------------------------------------------------------
# Copy + resize placeholder wedding photos into src/assets/.
# Source: /Volumes/4TB/Photography/Exports
# Resize: 2400px max edge, quality ~82 (via sips, macOS built-in)
# ------------------------------------------------------------------
set -euo pipefail

SRC="/Volumes/4TB/Photography/Exports"
DEST="$(cd "$(dirname "$0")/.." && pwd)/src/assets"
MAX_EDGE=2400

copy_resize() {
  local from="$1"
  local to="$2"
  mkdir -p "$(dirname "$to")"
  sips -Z "$MAX_EDGE" -s formatOptions 82 "$from" --out "$to" >/dev/null 2>&1
}

# ---------- Stacie & Callum ----------
COUPLE_DIR="$DEST/weddings/stacie-callum"
copy_resize "$SRC/Stacie-Callum-Wedding/1/4C108910-Edit.jpg"   "$COUPLE_DIR/01-getting-ready.jpg"
copy_resize "$SRC/Stacie-Callum-Wedding/1/4C108928-Edit.jpg"   "$COUPLE_DIR/02-bride-prep.jpg"
copy_resize "$SRC/Stacie-Callum-Wedding/2-color/4C109024-Edit.jpg" "$COUPLE_DIR/03-first-look.jpg"
copy_resize "$SRC/Stacie-Callum-Wedding/2-color/4C109040-Edit.jpg" "$COUPLE_DIR/04-first-look-2.jpg"
copy_resize "$SRC/Stacie-Callum-Wedding/3/4C109269-Edit.jpg"   "$COUPLE_DIR/05-ceremony.jpg"
copy_resize "$SRC/Stacie-Callum-Wedding/3/4C109286-Edit.jpg"   "$COUPLE_DIR/06-ceremony-2.jpg"
copy_resize "$SRC/Stacie-Callum-Wedding/4/4C109647-Edit.jpg"   "$COUPLE_DIR/07-portraits.jpg"
copy_resize "$SRC/Stacie-Callum-Wedding/4/4C109657-Edit.jpg"   "$COUPLE_DIR/08-portraits-2.jpg"
copy_resize "$SRC/Stacie-Callum-Wedding/5/4C100019-Edit.jpg"   "$COUPLE_DIR/09-reception.jpg"
copy_resize "$SRC/Stacie-Callum-Wedding/5/4C100038-Edit.jpg"   "$COUPLE_DIR/10-reception-2.jpg"
copy_resize "$SRC/Stacie-Callum-Wedding/6/4C100213-Edit.jpg"   "$COUPLE_DIR/11-celebration.jpg"
copy_resize "$SRC/Stacie-Callum-Wedding/6/4C100220-Edit.jpg"   "$COUPLE_DIR/12-celebration-2.jpg"
copy_resize "$SRC/Stacie-Callum-Wedding/4/4C109641-Edit.jpg"   "$COUPLE_DIR/cover.jpg"

# ---------- Anna & Bryan ----------
COUPLE_DIR="$DEST/weddings/anna-bryan"
copy_resize "$SRC/anna-and-bryan-wedding/4C107164-Edit.jpg" "$COUPLE_DIR/01.jpg"
copy_resize "$SRC/anna-and-bryan-wedding/4C107173-Edit.jpg" "$COUPLE_DIR/02.jpg"
copy_resize "$SRC/anna-and-bryan-wedding/4C107178-Edit.jpg" "$COUPLE_DIR/03.jpg"
copy_resize "$SRC/anna-and-bryan-wedding/4C107190-Edit.jpg" "$COUPLE_DIR/04.jpg"
copy_resize "$SRC/anna-and-bryan-wedding/4C107196-Edit.jpg" "$COUPLE_DIR/05.jpg"
copy_resize "$SRC/anna-and-bryan-wedding/4C107199-Edit.jpg" "$COUPLE_DIR/06.jpg"
copy_resize "$SRC/anna-and-bryan-wedding/4C107206-Edit.jpg" "$COUPLE_DIR/07.jpg"
copy_resize "$SRC/anna-and-bryan-wedding/4C107213-Edit.jpg" "$COUPLE_DIR/08.jpg"
copy_resize "$SRC/anna-and-bryan-wedding/4C107218-Edit.jpg" "$COUPLE_DIR/09.jpg"
copy_resize "$SRC/anna-and-bryan-wedding/4C107221-Edit.jpg" "$COUPLE_DIR/10.jpg"
copy_resize "$SRC/anna-and-bryan-wedding/4C107209-Edit.jpg" "$COUPLE_DIR/cover.jpg"

# ---------- Ashleigh ----------
COUPLE_DIR="$DEST/weddings/ashleigh-wedding"
copy_resize "$SRC/asheligh-wedding/candid-portraits/4C109378-Edit.jpg" "$COUPLE_DIR/01-candid.jpg"
copy_resize "$SRC/asheligh-wedding/candid-portraits/4C109686-Edit.jpg" "$COUPLE_DIR/02-candid.jpg"
copy_resize "$SRC/asheligh-wedding/candid-portraits/4C109706-Edit.jpg" "$COUPLE_DIR/03-candid.jpg"
copy_resize "$SRC/asheligh-wedding/candid-portraits/4C205661-Edit.jpg" "$COUPLE_DIR/04-candid.jpg"
copy_resize "$SRC/asheligh-wedding/ceremony/4C109324-Edit.jpg"         "$COUPLE_DIR/05-ceremony.jpg"
copy_resize "$SRC/asheligh-wedding/ceremony/4C109346-Edit.jpg"         "$COUPLE_DIR/06-ceremony.jpg"
copy_resize "$SRC/asheligh-wedding/ceremony/4C109363-Edit.jpg"         "$COUPLE_DIR/07-ceremony.jpg"
copy_resize "$SRC/asheligh-wedding/portraits/4C109493-Edit.jpg"        "$COUPLE_DIR/08-portraits.jpg"
copy_resize "$SRC/asheligh-wedding/portraits/4C109500-Edit.jpg"        "$COUPLE_DIR/09-portraits.jpg"
copy_resize "$SRC/asheligh-wedding/portraits/4C109506-Edit.jpg"        "$COUPLE_DIR/10-portraits.jpg"
copy_resize "$SRC/asheligh-wedding/portraits/4C109489-Edit.jpg"        "$COUPLE_DIR/cover.jpg"

# ---------- DanWen ----------
COUPLE_DIR="$DEST/weddings/danwen"
copy_resize "$SRC/DanWen-ill-wedding/4C100078-Edit.jpg"  "$COUPLE_DIR/01.jpg"
copy_resize "$SRC/DanWen-ill-wedding/4C100140-Edit.jpg"  "$COUPLE_DIR/02.jpg"
copy_resize "$SRC/DanWen-ill-wedding/4C100226-Edit.jpg"  "$COUPLE_DIR/03.jpg"
copy_resize "$SRC/DanWen-ill-wedding/4C100246-Edit.jpg"  "$COUPLE_DIR/04.jpg"
copy_resize "$SRC/DanWen-ill-wedding/4C100263-Edit.jpg"  "$COUPLE_DIR/05.jpg"
copy_resize "$SRC/DanWen-ill-wedding/4C100414-Edit.jpg"  "$COUPLE_DIR/06.jpg"
copy_resize "$SRC/DanWen-ill-wedding/4C109324-Edit.jpg"  "$COUPLE_DIR/07.jpg"
copy_resize "$SRC/DanWen-ill-wedding/4C109630-Edit.jpg"  "$COUPLE_DIR/08.jpg"
copy_resize "$SRC/DanWen-ill-wedding/4C109707-Edit.jpg"  "$COUPLE_DIR/09.jpg"
copy_resize "$SRC/DanWen-ill-wedding/4C109791-Edit.jpg"  "$COUPLE_DIR/10.jpg"
copy_resize "$SRC/DanWen-ill-wedding/4C209262-Edit.jpg"  "$COUPLE_DIR/cover.jpg"

# ---------- Home hero + bio portrait ----------
copy_resize "$SRC/Stacie-Callum-Wedding/4/4C109641-Edit.jpg" "$DEST/home/hero.jpg"
copy_resize "$SRC/anna-and-bryan-wedding/4C107199-Edit.jpg"  "$DEST/home/featured-1.jpg"
copy_resize "$SRC/asheligh-wedding/portraits/4C109500-Edit.jpg" "$DEST/home/featured-2.jpg"
copy_resize "$SRC/Stacie-Callum-Wedding/6/4C100213-Edit.jpg" "$DEST/home/featured-3.jpg"

echo "Done. Total files:"
find "$DEST" -type f -name "*.jpg" | wc -l
