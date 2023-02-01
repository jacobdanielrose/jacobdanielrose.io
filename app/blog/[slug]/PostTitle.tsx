import TitleTypewriter from "../../../components/shared/TitleTypewriter";

export default function PostTitle({ children }) {
  return (
    <h1 className="mb-12 text-center text-3xl font-bold leading-tight tracking-tighter md:text-left md:text-5xl md:leading-none lg:text-6xl">
      <TitleTypewriter text={children} />
    </h1>
  )
}
