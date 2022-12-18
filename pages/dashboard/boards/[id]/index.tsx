import Layout from "../../../../components/Layout";
import Boards from "../../../../components/Boards";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function BoardPage() {
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    setId(router.query.id as string);
    // codes using router.query
  }, [router.isReady, router.query]);
  const [id, setId] = useState<string>("");
  return <Layout>{id.length != 0 && <Boards id={id} />}</Layout>;
}
