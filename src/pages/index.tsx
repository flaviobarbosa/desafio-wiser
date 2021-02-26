import Head from 'next/head';

import PanelOne from '../components/PanelOne';
import PanelTwo from '../components/PanelTwo';
import Form from '../components/Form';
import Container from '../components/Container';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container>
        <main>
          <PanelOne />
          <PanelTwo>
            <Form />
          </PanelTwo>
        </main>
      </Container>
    </div>
  );
}
