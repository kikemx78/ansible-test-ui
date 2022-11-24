import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <main>
      Ansible ui test
      {JSON.stringify(location)}
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
