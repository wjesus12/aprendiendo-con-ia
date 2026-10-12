"""Reescribe en index.html el bloque <!-- contenido:inicio/fin --> con todos los
archivos de js/content/ (orden: datos, ruta, tips, entorno, mod-XX, glosario-*).
Uso: python3 tests/tools/sync_index.py [version]"""
import os, re, sys
root = os.path.join(os.path.dirname(__file__), '..', '..')
v = sys.argv[1] if len(sys.argv) > 1 else '1'
first = ['datos-volatiles.js', 'ruta.js', 'tips.js', 'entorno.js']
files = sorted(os.listdir(os.path.join(root, 'js/content')))
files = [f for f in first if f in files] + sorted(f for f in files if f.endswith('.js') and f not in first)
p = os.path.join(root, 'index.html')
s = open(p, encoding='utf-8').read()
block = '\n'.join(f'  <script src="js/content/{f}?v={v}"></script>' for f in files)
s = re.sub(r'  <!-- contenido:inicio -->.*?<!-- contenido:fin -->',
           f'  <!-- contenido:inicio -->\n{block}\n  <!-- contenido:fin -->', s, flags=re.S)
open(p, 'w', encoding='utf-8').write(s)
print(len(files), 'archivos de contenido enlazados')
