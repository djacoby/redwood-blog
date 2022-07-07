import type { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

interface Props {
  article: Post
}

const Article = ({ article }: Props) => {
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
        <div>{article.body}</div>
        <div>Posted at {article.createdAt}</div>
      </header>
    </article>
  )
}

export default Article
