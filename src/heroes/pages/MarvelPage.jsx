import { HeroList } from "../components"

export const MarvelPage = () => {
  return (
    <>
      <h1>Marvel Page</h1>
      <hr />
      <ul>
        <HeroList publisher='Marvel Comics'/>
      </ul>
    </>
  )
}
