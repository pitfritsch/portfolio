import { styled } from '@stitches/react'
import type { GetStaticProps, NextPage } from 'next'
import About from '../components/About'
import FloatingArrows from '../components/FloatingArrows'
import GitHubProjects from '../components/GitHubProjects'
import { MainContainer } from '../components/MainContainer'
import MyProjects from '../components/MyProjects'
import { Title } from '../components/Title'

const SubTitle = styled('h3', {
  fontFamily: `'Merriweather', serif`,
  color: 'white',
  textTransform: 'uppercase',
  background: 'linear-gradient(45deg, #3e3e3e, transparent)',
  padding: '2px 15px',
  borderRadius: '2px 10px 10px 2px',
  fontSize: 'clamp(1rem, 0.50rem + 1vw, 2rem)',
  fontStyle: 'italic'
})

export interface Owner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface License {
  key: string;
  name: string;
  spdx_id: string;
  url: string;
  node_id: string;
}

export interface Repository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url?: any;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: License;
  allow_forking: boolean;
  is_template: boolean;
  topics: any[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}

interface Teste {
  repos: Repository[]
}

const Home: NextPage<Teste> = ({ repos }) => {
  return (<>
    <MainContainer>
      <div key={'my-name'}>
        <Title key={'pedro'}>
          Pedro
        </Title>
        <Title key={'averbeck'}>
          Averbeck
        </Title>
        <Title key={'fritsch'}>
          Fritsch
        </Title>
        <SubTitle>
          Frontend Developer
        </SubTitle>
      </div>
      <FloatingArrows key={'floating-arrows'}/>
    </MainContainer>
    <About />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2b2254" fillOpacity="1" d="M0,0L6.2,21.3C12.3,43,25,85,37,106.7C49.2,128,62,128,74,112C86.2,96,98,64,111,69.3C123.1,75,135,117,148,112C160,107,172,53,185,69.3C196.9,85,209,171,222,186.7C233.8,203,246,149,258,144C270.8,139,283,181,295,186.7C307.7,192,320,160,332,122.7C344.6,85,357,43,369,37.3C381.5,32,394,64,406,101.3C418.5,139,431,181,443,181.3C455.4,181,468,139,480,144C492.3,149,505,203,517,202.7C529.2,203,542,149,554,154.7C566.2,160,578,224,591,250.7C603.1,277,615,267,628,261.3C640,256,652,256,665,245.3C676.9,235,689,213,702,197.3C713.8,181,726,171,738,186.7C750.8,203,763,245,775,266.7C787.7,288,800,288,812,261.3C824.6,235,837,181,849,165.3C861.5,149,874,171,886,186.7C898.5,203,911,213,923,229.3C935.4,245,948,267,960,240C972.3,213,985,139,997,106.7C1009.2,75,1022,85,1034,122.7C1046.2,160,1058,224,1071,261.3C1083.1,299,1095,309,1108,261.3C1120,213,1132,107,1145,85.3C1156.9,64,1169,128,1182,181.3C1193.8,235,1206,277,1218,266.7C1230.8,256,1243,192,1255,144C1267.7,96,1280,64,1292,74.7C1304.6,85,1317,139,1329,170.7C1341.5,203,1354,213,1366,197.3C1378.5,181,1391,139,1403,117.3C1415.4,96,1428,96,1434,96L1440,96L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"></path></svg>
    <MyProjects />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(43, 34, 84)" fillOpacity="1" d="M0,192L6.2,197.3C12.3,203,25,213,37,208C49.2,203,62,181,74,170.7C86.2,160,98,160,111,133.3C123.1,107,135,53,148,53.3C160,53,172,107,185,117.3C196.9,128,209,96,222,90.7C233.8,85,246,107,258,101.3C270.8,96,283,64,295,74.7C307.7,85,320,139,332,144C344.6,149,357,107,369,96C381.5,85,394,107,406,133.3C418.5,160,431,192,443,208C455.4,224,468,224,480,229.3C492.3,235,505,245,517,250.7C529.2,256,542,256,554,218.7C566.2,181,578,107,591,112C603.1,117,615,203,628,202.7C640,203,652,117,665,80C676.9,43,689,53,702,58.7C713.8,64,726,64,738,96C750.8,128,763,192,775,186.7C787.7,181,800,107,812,90.7C824.6,75,837,117,849,165.3C861.5,213,874,267,886,272C898.5,277,911,235,923,229.3C935.4,224,948,256,960,245.3C972.3,235,985,181,997,165.3C1009.2,149,1022,171,1034,181.3C1046.2,192,1058,192,1071,170.7C1083.1,149,1095,107,1108,112C1120,117,1132,171,1145,213.3C1156.9,256,1169,288,1182,272C1193.8,256,1206,192,1218,165.3C1230.8,139,1243,149,1255,128C1267.7,107,1280,53,1292,32C1304.6,11,1317,21,1329,64C1341.5,107,1354,181,1366,181.3C1378.5,181,1391,107,1403,80C1415.4,53,1428,75,1434,85.3L1440,96L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,1108,0C1095.4,0,1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,0C873.8,0,862,0,849,0C836.9,0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,0C209.2,0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z"></path></svg>
    <GitHubProjects repos={repos} />
  </>)
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('https://api.github.com/users/pitfritsch/repos?sort=last-updated')
  const repos = await res.json()
  
  return {
    props: {
      repos,
    },
    revalidate: 1000000
  }
}