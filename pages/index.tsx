import React, { FC } from 'react';
import Head from 'next/head';

const BASE_API = 'https://hostedboringavatars.vercel.app/api';

interface Example {
  link: string;
  title: string;
}

const EXAMPLES: Array<Example> = [
  {
    link: '/beam',
    title: 'Default with variant',
  },
  {
    link: '/marble?size=140',
    title: 'Specific size',
  },
  {
    link: '/bunhaus?name=john%20doe',
    title: 'With name',
  },
  {
    link: '/sunset?colors=69d2e7,a7dbd8,e0e4cc,f38630,fa6900',
    title: 'With colors',
  },
  {
    link: '/ring?colors=69d2e7,a7dbd8,e0e4cc,f38630,fa6900&name=john%20doe&size=140',
    title: 'With all params',
  },
];

const Index: FC = () => {
  return (
    <div>
      <Head>
        <title>Hosted Boring Avatars</title>
      </Head>
      <h1>Hosted Boring Avatars</h1>
      <h2>
        Credit to <a href="https://boringavatars.com/">boringavatars</a>
      </h2>
      <h3>How to use</h3>
      <p>Image URL: {BASE_API}/[variant]</p>
      <p>
        The avatar can be customized by adding query params according to the components required{' '}
        <a href="https://github.com/boringdesigners/boring-avatars">here</a>
      </p>
      <h3>Examples</h3>
      {EXAMPLES.map((example) => (
        <div key={example.link}>
          <h4>{example.title}</h4>
          <img src={`${BASE_API}${example.link}`} />
          <br />
          <code>
            {BASE_API}
            {example.link}
          </code>
        </div>
      ))}
      <style global jsx>{`
        body {
          margin: 40px auto;
          max-width: 650px;
          line-height: 1.6;
          font-size: 18px;
          color: #444;
          padding: 0 10px;
        }
        h1,
        h2,
        h3 {
          line-height: 1.2;
        }
      `}</style>
    </div>
  );
};

export default Index;
