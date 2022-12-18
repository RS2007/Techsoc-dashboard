import Layout from "../../../../components/Layout";
import BoardContents from "../../../../components/Dashboard";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function BoardsPage() {
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    setId(router.query.id as string);
    // codes using router.query
  }, [router.isReady, router.query]);
  const [id, setId] = useState<string>("");
  return <Layout>{id.length != 0 && <BoardContents id={id} />}</Layout>;
}
