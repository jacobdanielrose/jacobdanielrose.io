// Renders the Open Graph image used on the home page
import { Post } from "lib/sanity.queries"

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
      <div
        style={{
          left: 42,
          top: 42,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            marginRight: 10,
            fontSize: 50,
            color: 'white',
            borderBottom: '1px solid red'
          }}
        >
          {title}
        </span>

      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: '20px 50px',
          margin: '0 42px',
          fontSize: 40,
          width: 'auto',
          maxWidth: 550,
          textAlign: 'center',
          color: 'white',
          lineHeight: 1.4,
        }}
      >
        <h1>
          Check out my blog!
        </h1>
      </div>
    </div>
  )
}
