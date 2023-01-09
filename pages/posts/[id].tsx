import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { useRouter } from "next/router"
import { ParsedUrlQuery } from "querystring"

type PostProps = {
  id: string,
}

const Post: NextPage<PostProps> = (props) => {
  const { id } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <p>{`This page adapt to /posts/${id}`}</p>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: {
        id: "1",
        message: "Hello",
      },
    },
    {
      params: {
        id: "2",
        message: "World",
      },
    },
  ];

  // ページが存在しない場合404を返す
  return { paths, fallback: false };
}

interface PostParams extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps<PostProps, PostParams> = async (context) => {
  return {
    props: {
      id: context.params!['id']
    },
  }
}

export default Post;
