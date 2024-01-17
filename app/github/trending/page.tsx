import { Octokit } from 'octokit';

const octokit = new Octokit({ 
  auth: process.env.NEXT_GITHUB_TOKEN
});

const getData = async () => {
  // return await octokit.request("GET /repos/{owner}/{repo}/issues", {
  //   owner: "arronf2e",
  //   repo: "blog",
  // });
  return await octokit.request('GET /repositories', {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
}



export default async function Trending() {

  const data = await getData();

  console.log(data, 'dat')

  return (
    <div>
      {
        data.data?.map(item => (
          <div key={item.id}>
            <p>{item.url}</p>
          </div>
        ))
      }
    </div>
  )
}