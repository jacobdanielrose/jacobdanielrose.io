/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */
import { CustomPortableText } from '../../../components/portabletext/CustomPortableText'
import styles from './PostBody.module.css'

export default function PostBody({ content }) {
  return (
    <div className={`mx-auto max-w-3xl ${styles.portableText}`}>
      <CustomPortableText value={content} />
    </div>
  )
}
