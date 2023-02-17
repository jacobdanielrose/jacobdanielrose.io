import TitleTypewriter from "../../../components/shared/TitleTypewriter";

export default function PostTitle({ children }) {
  return (
    <h1 className="mb-12 font-sourcecode text-center text-3xl leading-tight tracking-tighter md:text-left md:text-5xl md:leading-none lg:text-6xl">
      <TitleTypewriter cursor={true} text={children} />
    </h1>
  )
}
