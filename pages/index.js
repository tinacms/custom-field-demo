import React from "react";
import { useTina } from "tinacms/dist/react";
import { client } from "../.tina/__generated__/client";

export default function Home(props) {
  const { data } = useTina(props);

  return (
    <>
      <div style={{ maxWidth: "500px", margin: "24px auto" }}>
        <h1 style={{ textAlign: "center" }}>{data.page.title}</h1>
      </div>
    </>
  );
}
export const getStaticProps = async () => {
  return {
    props: await client.queries.page({
      relativePath: "home.md",
    }),
  };
};
