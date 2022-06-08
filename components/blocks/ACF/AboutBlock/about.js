import About from '@/components/organisms/About.js/about';

export default function AboutBlock({attributes}) {
  const {data} = attributes

  return <>{attributes ? <About {...data} /> : 'u hath shit the bed'}</>
}
