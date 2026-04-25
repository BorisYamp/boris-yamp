import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { getTranslations } from 'next-intl/server';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Boris Yampolsky — Full-stack & quantum engineer';

export default async function OpengraphImage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'hero' });

  const photoBuffer = await readFile(join(process.cwd(), 'public/images/boris.jpg'));
  const photoSrc = `data:image/jpeg;base64,${photoBuffer.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#0d1628',
          backgroundImage:
            'radial-gradient(ellipse 65% 55% at 25% 30%, rgba(37, 99, 235, 0.30), transparent 65%), radial-gradient(ellipse 50% 50% at 90% 80%, rgba(15, 23, 42, 0.6), transparent 60%)',
          color: '#f5f5f5',
          fontFamily: 'system-ui, sans-serif',
          padding: '70px',
          alignItems: 'center',
          gap: '60px',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          alt=""
          width={380}
          height={490}
          style={{
            objectFit: 'cover',
            borderRadius: '24px',
            border: '2px solid rgba(139, 92, 246, 0.5)',
            boxShadow: '0 20px 60px rgba(139, 92, 246, 0.25)',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div
            style={{
              fontSize: 220,
              fontWeight: 800,
              lineHeight: 0.85,
              letterSpacing: '-0.05em',
              backgroundImage: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: 30,
            }}
          >
            BY
          </div>
          <div
            style={{
              fontSize: 44,
              fontWeight: 700,
              color: '#f5f5f5',
              marginBottom: 14,
              letterSpacing: '-0.02em',
            }}
          >
            Boris Yampolsky
          </div>
          <div
            style={{
              fontSize: 24,
              color: '#a0a0a0',
              lineHeight: 1.35,
              maxWidth: 520,
            }}
          >
            {t('title')}
          </div>
        </div>
      </div>
    ),
    size
  );
}
