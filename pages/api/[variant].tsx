import React from 'react';
import ReactDOMServer from 'react-dom/server';
import type { NextApiRequest, NextApiResponse } from 'next';
import Avatar from 'boring-avatars';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { variant, size, name, colors } = req.query;

  const avatarHtml = ReactDOMServer.renderToString(
    <Avatar
      size={size}
      name={name}
      variant={variant}
      colors={(colors as string)?.split(',').map((color) => `#${color}`)}
    />,
  );
  res.setHeader('Content-Type', 'image/svg+xml');
  res.end(avatarHtml);
}
