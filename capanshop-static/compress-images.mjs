import sharp from 'sharp';
import { readdirSync, statSync, unlinkSync, copyFileSync } from 'fs';
import { join, extname } from 'path';

const dir = process.argv[2] || './dist';

const files = readdirSync(dir).map(f => join(dir, f));

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue;

  const before = statSync(file).size;
  const tmp = file + '.tmp';

  try {
    if (ext === '.png') {
      await sharp(file).png({ quality: 80, compressionLevel: 9 }).toFile(tmp);
    } else if (ext === '.webp') {
      await sharp(file).webp({ quality: 75 }).toFile(tmp);
    } else {
      await sharp(file).jpeg({ quality: 75, mozjpeg: true }).toFile(tmp);
    }

    const after = statSync(tmp).size;
    const name = file.split(/[\\/]/).pop();
    const saved = ((1 - after / before) * 100).toFixed(1);

    if (after < before) {
      unlinkSync(file);
      copyFileSync(tmp, file);
      unlinkSync(tmp);
      console.log(`✓ ${name}: ${(before/1024/1024).toFixed(2)}MB → ${(after/1024/1024).toFixed(2)}MB (-${saved}%)`);
    } else {
      unlinkSync(tmp);
      console.log(`- ${name}: already optimal`);
    }
  } catch (e) {
    try { unlinkSync(tmp); } catch {}
    console.error(`✗ ${file.split(/[\\/]/).pop()}: ${e.message}`);
  }
}
