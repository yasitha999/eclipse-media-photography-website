import satori from 'satori';
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// Load font files from @fontsource packages (available at build time)
const interRegular = readFileSync(
  join(process.cwd(), 'node_modules/@fontsource/inter/files/inter-latin-400-normal.woff'),
);
const cormorantSemiBold = readFileSync(
  join(
    process.cwd(),
    'node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-600-normal.woff',
  ),
);

export interface OgImageOptions {
  title: string;
  subtitle?: string;
}

export async function generateOgImage({ title, subtitle }: OgImageOptions): Promise<Buffer> {
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#141210',
          padding: '60px 80px',
          fontFamily: 'Inter',
        },
        children: [
          // Top accent line
          {
            type: 'div',
            props: {
              style: {
                width: '60px',
                height: '3px',
                backgroundColor: '#a97c50',
                marginBottom: '40px',
              },
            },
          },
          // Page title
          {
            type: 'div',
            props: {
              style: {
                fontFamily: 'Cormorant Garamond',
                fontSize: title.length > 30 ? '52px' : '64px',
                fontWeight: 600,
                color: '#FAF9F7',
                textAlign: 'center',
                lineHeight: 1.2,
                maxWidth: '900px',
              },
              children: title,
            },
          },
          // Subtitle
          ...(subtitle
            ? [
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '24px',
                      color: '#a97c50',
                      marginTop: '20px',
                      textAlign: 'center' as const,
                      lineHeight: 1.4,
                      maxWidth: '700px',
                    },
                    children: subtitle,
                  },
                },
              ]
            : []),
          // Bottom accent line
          {
            type: 'div',
            props: {
              style: {
                width: '60px',
                height: '3px',
                backgroundColor: '#a97c50',
                marginTop: '40px',
              },
            },
          },
          // Site name
          {
            type: 'div',
            props: {
              style: {
                fontSize: '20px',
                color: '#7a756d',
                marginTop: '30px',
                letterSpacing: '3px',
                textTransform: 'uppercase' as const,
              },
              children: 'Eclipse Media',
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: interRegular,
          weight: 400,
          style: 'normal',
        },
        {
          name: 'Cormorant Garamond',
          data: cormorantSemiBold,
          weight: 600,
          style: 'normal',
        },
      ],
    },
  );

  const png = await sharp(Buffer.from(svg)).png({ quality: 90 }).toBuffer();
  return png;
}
