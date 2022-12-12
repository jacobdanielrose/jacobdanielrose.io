// Renders the Open Graph image used on the home page

export const width = 1200
export const height = 630

export function OpenGraphImage(props: { title: string }) {
  const { title } = props
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#242424',
      }}
    >
      <div tw="p-10 flex w-full justify-center items-center">
        <h2 tw="text-3xl text-white font-bold tracking-tight m-10">
          Jacob&#39;s Blog
        </h2>
        <a href="#" tw="flex items-center justify-center rounded-md border border-transparent bg-[#ff0000]/80 px-5 py-3 text-base font-medium text-white">
          Get started
        </a>
      </div>
    </div>
  )
}
