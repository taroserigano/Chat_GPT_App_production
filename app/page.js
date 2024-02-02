import Link from 'next/link';

const HomePage = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-6xl font-bold text-primary'>GPTGenius </h1>
          <p className='py-6 text-lg leading-loose'>

          ChatGPT is a conversational language model developed by OpenAI. It is based on the GPT (Generative Pre-trained Transformer) architecture, specifically GPT-3.5 in this case... by ChatGPT
          </p>
          <Link href='/chat' className='btn btn-secondary'>
            Let's Start!
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
