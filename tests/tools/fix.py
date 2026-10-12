"""Reemplazos exactos en un archivo: python3 tests/tools/fix.py archivo 'viejo' 'nuevo' ['viejo' 'nuevo' ...]"""
import sys
p = sys.argv[1]; s = open(p, encoding='utf-8').read()
pairs = sys.argv[2:]
for a, b in zip(pairs[::2], pairs[1::2]):
    if a not in s: sys.exit('NO ENCONTRADO: ' + a)
    s = s.replace(a, b)
open(p, 'w', encoding='utf-8').write(s)
